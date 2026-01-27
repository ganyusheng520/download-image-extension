import './App.css';
import {useEffect, useRef, useState} from 'react';
import { getInitImageList, getParamFromUrl} from './util';
import {ImageFileType, ImageType, ImageWrapper} from './components/image-wrapper';
import {Button, Stack, Box, Radio, RadioGroup, Text} from '@chakra-ui/react';
import {
    Tag,
} from '@chakra-ui/react';
import {DownloadIcon} from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

import {download} from './util/native';
import {isDev} from './config/env';
import Log from './util/log';
import filenamify from 'filenamify';
import {downloadImages} from './util/download';


const imageMap = new Map<string, ImageType>();

function App() {
    const toast = useToast()
    const intervalId = useRef<number>(0);
    const [imageList, setImageList] = useState<string[]>(getInitImageList());
    // const [imageMap, setImageMap] = useState<Map<string, ImageType>>(new Map<string, ImageType>());
    const [selectedImageList, setSelectedImageList] = useState<string[]>([]);
    const [limitSize, setLimitSize] = useState<number>(0);
    // const [folder, setFolder] = useState<string>('images');
    const [typeFilter, setTypeFilter] = useState<ImageFileType[]>(['png', 'jpg', 'jpeg', 'gif', 'webp']);
    // 检查页面是否支持 content script 注入
    async function isPageInjectable(tabId: number): Promise<boolean> {
        try {
            const tab = await chrome.tabs.get(tabId);
            if (!tab.url) {
                return false;
            }
            // 检查是否是特殊页面（chrome://, chrome-extension://, about: 等）
            const url = tab.url.toLowerCase();
            if (url.startsWith('chrome://') || 
                url.startsWith('chrome-extension://') || 
                url.startsWith('moz-extension://') ||
                url.startsWith('about:') ||
                url.startsWith('edge://')) {
                return false;
            }
            return true;
        } catch {
            return false;
        }
    }

    // 尝试注入 content script（如果需要）
    async function ensureContentScriptInjected(tabId: number): Promise<{ success: boolean; reason?: string }> {
        // 先尝试发送 ping 消息，如果成功说明已经注入
        try {
            const pingResponse = await chrome.tabs.sendMessage(tabId, { type: 'ping' });
            if (pingResponse && pingResponse.ready) {
                Log.debug('Content script already injected');
                return { success: true };
            }
        } catch (pingError: any) {
            // Ping 失败，说明 content script 可能还没有注入
            Log.debug('Ping failed, content script may not be injected yet', pingError);
        }
        
        // 如果 ping 失败，尝试多次等待和重试（content script 可能正在加载）
        const maxWaitAttempts = 3;
        let lastWaitError: any = null;
        for (let attempt = 0; attempt < maxWaitAttempts; attempt++) {
            const waitTime = (attempt + 1) * 500; // 500ms, 1000ms, 1500ms
            Log.debug(`Waiting ${waitTime}ms for content script to load (attempt ${attempt + 1}/${maxWaitAttempts})`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            
            try {
                const pingResponse = await chrome.tabs.sendMessage(tabId, { type: 'ping' });
                if (pingResponse && pingResponse.ready) {
                    Log.debug('Content script ready after wait');
                    return { success: true };
                }
            } catch (retryError) {
                lastWaitError = retryError;
                // 继续下一次尝试
                if (attempt === maxWaitAttempts - 1) {
                    Log.debug('Content script still not ready after all wait attempts', retryError);
                }
            }
        }
        
        // 如果等待后仍然失败，尝试动态注入（仅作为最后手段）
        try {
            Log.debug('Attempting to dynamically inject content scripts');
            
            // 检查是否有 scripting API 权限
            if (!chrome.scripting) {
                Log.warn('chrome.scripting API not available');
                return { 
                    success: false, 
                    reason: '脚本注入 API 不可用。请确保扩展已正确安装并具有必要权限。'
                };
            }
            
            // 尝试注入 hook.js
            try {
                await chrome.scripting.executeScript({
                    target: { tabId },
                    files: ['hook.js'],
                });
                Log.debug('Successfully injected hook.js');
            } catch (hookError: any) {
                // hook.js 可能已经存在，继续尝试 request-hook.js
                Log.debug('hook.js injection result', hookError.message);
            }
            
            // 尝试注入 request-hook.js
            try {
                await chrome.scripting.executeScript({
                    target: { tabId },
                    files: ['request-hook.js'],
                });
                Log.debug('Successfully injected request-hook.js');
            } catch (requestHookError: any) {
                // request-hook.js 可能已经存在
                Log.debug('request-hook.js injection result', requestHookError.message);
            }
            
            // 等待脚本执行
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 再次尝试 ping
            try {
                const finalPingResponse = await chrome.tabs.sendMessage(tabId, { type: 'ping' });
                if (finalPingResponse && finalPingResponse.ready) {
                    Log.debug('Content script ready after dynamic injection');
                    return { success: true };
                }
            } catch (finalPingError: any) {
                Log.warn('Content script still not ready after dynamic injection', finalPingError);
                return { 
                    success: false, 
                    reason: '动态注入脚本后仍无法连接。请刷新目标页面后重试。'
                };
            }
        } catch (injectError: any) {
            Log.warn('Failed to dynamically inject content script', injectError);
            return { 
                success: false, 
                reason: `脚本注入失败：${injectError.message || '未知错误'}`
            };
        }
        
        // 所有方法都失败
        return { 
            success: false, 
            reason: lastWaitError?.message?.includes('Receiving end does not exist') 
                ? '无法与页面建立连接。请刷新目标页面后重试。'
                : 'Content script 未就绪。请刷新目标页面后重试。'
        };
    }

    async function loadImages() {
        try {
            const tabId = getParamFromUrl('tabId');
            if (!tabId) {
                Log.warn('No tabId found in URL');
                toast({
                    title: '错误',
                    description: '无法获取标签页 ID，请重新打开扩展',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            // 检查 tab 是否存在
            let tab: chrome.tabs.Tab;
            try {
                tab = await chrome.tabs.get(+tabId);
                if (!tab) {
                    throw new Error('Tab not found');
                }
            } catch (tabError) {
                Log.warn('Tab not found or inaccessible', tabError);
                toast({
                    title: '错误',
                    description: '无法访问目标标签页，可能已关闭或刷新。请重新打开扩展。',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            // 检查页面是否支持注入
            const canInject = await isPageInjectable(+tabId);
            if (!canInject) {
                toast({
                    title: '不支持',
                    description: '当前页面类型不支持图片提取（如 chrome:// 页面）。请在其他网页上使用。',
                    status: 'warning',
                    duration: 6000,
                    isClosable: true,
                });
                return;
            }

            // 确保 content script 已注入
            const injectionResult = await ensureContentScriptInjected(+tabId);
            if (!injectionResult.success) {
                // 检查是否是特殊页面
                const canInject = await isPageInjectable(+tabId);
                if (!canInject) {
                    toast({
                        title: '不支持',
                        description: '当前页面类型不支持脚本注入（如 chrome:// 页面）。请在其他网页上使用。',
                        status: 'warning',
                        duration: 6000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: '无法连接页面',
                        description: injectionResult.reason || '无法注入脚本到目标页面。请刷新目标页面，然后重新打开扩展。',
                        status: 'error',
                        duration: 8000,
                        isClosable: true,
                    });
                }
                return;
            }

            // 发送消息，带重试机制
            let response: any;
            const maxRetries = 3;
            let lastError: any = null;

            for (let attempt = 0; attempt < maxRetries; attempt++) {
                try {
                    response = await chrome.tabs.sendMessage(+tabId, {
                        type: 'getAllImages',
                    });
                    break; // 成功则退出循环
                } catch (messageError: any) {
                    lastError = messageError;
                    const isConnectionError = 
                        messageError.message?.includes('Receiving end does not exist') || 
                        messageError.message?.includes('Could not establish connection');
                    
                    if (isConnectionError && attempt < maxRetries - 1) {
                        // 等待后重试，每次等待时间递增
                        const waitTime = (attempt + 1) * 500;
                        Log.warn(`Content script not ready, retrying in ${waitTime}ms (attempt ${attempt + 1}/${maxRetries})...`);
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                        
                        // 重新尝试注入脚本
                        const reinjectionResult = await ensureContentScriptInjected(+tabId);
                        if (!reinjectionResult.success) {
                            // 如果重新注入失败，显示错误并退出
                            toast({
                                title: '无法连接',
                                description: reinjectionResult.reason || '无法与页面建立连接。请刷新目标页面，然后重新打开扩展。',
                                status: 'error',
                                duration: 8000,
                                isClosable: true,
                            });
                            return;
                        }
                    } else {
                        // 最后一次尝试失败，或者不是连接错误
                        throw messageError;
                    }
                }
            }

            // 如果所有重试都失败，但没有抛出错误（理论上不应该发生）
            if (!response && lastError) {
                throw lastError;
            }

            if (!response) {
                Log.warn('No response from content script');
                toast({
                    title: '错误',
                    description: '未能获取页面响应。请刷新目标页面，然后重新打开扩展。',
                    status: 'error',
                    duration: 6000,
                    isClosable: true,
                });
                return;
            }

            if (!response.imageList) {
                Log.warn('Invalid response from content script', response);
                toast({
                    title: '警告',
                    description: '未能获取图片列表。请刷新目标页面后重试。',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            const {title, imageList} = response;
            setImageList(imageList || []);
            
            // 设置下载文件名监听器（只设置一次）
            if (title) {
                chrome.downloads.onDeterminingFilename.addListener(
                    function (downloadItem, suggest) {
                        suggest({
                            filename: `${filenamify(title) || 'images'}/${downloadItem.filename}`,
                        });
                    }
                );
            }
            
            Log.info('imageList loaded', title, imageList?.length);
        } catch (error: any) {
            Log.error('loadImages error', error);
            const errorMessage = error?.message || '加载图片列表时发生未知错误';
            const isConnectionError = 
                errorMessage.includes('Receiving end') || 
                errorMessage.includes('Could not establish connection') ||
                errorMessage.includes('Receiving end does not exist');
            
            toast({
                title: '错误',
                description: isConnectionError
                    ? '无法与页面通信。请刷新目标页面，然后重新打开扩展。'
                    : `加载失败：${errorMessage}`,
                status: 'error',
                duration: 7000,
                isClosable: true,
            });
        }
    }

    function loadMoreImages() {
        intervalId.current = setInterval(async () => {
            try {
                const tabId = getParamFromUrl('tabId');
                if (!tabId) {
                    // 如果没有 tabId，清除 interval
                    clearInterval(intervalId.current);
                    return;
                }

                // 检查 tab 是否存在
                try {
                    await chrome.tabs.get(+tabId);
                } catch (tabError) {
                    // Tab 不存在，清除 interval
                    Log.warn('Tab no longer exists, clearing interval', tabError);
                    clearInterval(intervalId.current);
                    return;
                }

                // 发送消息，添加错误处理
                let response: any;
                try {
                    response = await chrome.tabs.sendMessage(+tabId, {
                        type: 'getFetchImageList',
                    });
                } catch (messageError: any) {
                    // 静默处理错误，不显示 toast（因为是后台任务）
                    if (messageError.message?.includes('Receiving end does not exist') || 
                        messageError.message?.includes('Could not establish connection')) {
                        Log.debug('Content script not ready for getFetchImageList', messageError);
                        return; // 静默失败，下次再试
                    }
                    Log.warn('getFetchImageList error', messageError);
                    return;
                }

                Log.info('getFetchImageList', response?.imageList?.length);
                if (response?.imageList?.length > 0) {
                    setImageList((list) => {
                        return [...list, ...response.imageList];
                    });
                }
            } catch (error: any) {
                Log.error('loadMoreImages error', error);
                // 发生严重错误时清除 interval
                clearInterval(intervalId.current);
            }
        }, 10 * 1000);
    }

    function onImageLoad({url, blob, width, height, type, loaded}: ImageType) {
        imageMap.set(url, {
            url,
            blob,
            width,
            height,
            type,
            loaded,
        });
    }

    function onSelectionChange(url: string) {
        if (!selectedImageList.includes(url)) {
            setSelectedImageList([
                ...selectedImageList,
                url,
            ]);
        } else {
            setSelectedImageList(selectedImageList.filter(src => url !== src));
        }
    }

    async function downloadImage() {
        const downloadList = getSelectList();
        if (downloadList.length === 0) {
            toast({
                title: '提示',
                description: '请选择要下载的图片',
                status: 'warning',
                duration: 6000,
                isClosable: true,
            });
            return ;
        }

        try {
            const successCount = await downloadImages(downloadList);
            toast({
                title: '下载完成',
                description: `选择照片${downloadList.length}张，已下载图片${successCount}张`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (e) {
            toast({
                title: 'warning',
                description: e?.message || 'unknown error',
                status: 'warning',
                duration: 4000,
                isClosable: true,
            })
        }

    }

    function onTypeFilterChange(value) {
        setTypeFilter(value);
    }

    function selectAll() {
        const list = getImageListFromView();
        setSelectedImageList(list.map(item => item.url));
    }

    function reset() {
        setSelectedImageList([]);
    }

    function getImageListFromView() {
        return imageList
            .filter((url) => {
                const { loaded, width } = imageMap.get(url) || {};
                return  !loaded || width;
            })
            .filter((url) => {
            const image = imageMap.get(url);
            if (image?.width && (image.width < limitSize || image.height < limitSize )) {
                return false;
            }
            return true;
        }).filter((url) => {
            const image = imageMap.get(url);
            if (image?.loaded && image.type && !typeFilter.includes(image.type)) {
                return false;
            }
            return true;
        }).map((url) => {
            return {
                url,
            };
        });
    }

    function getSelectList() {
        const visibleImageList = getImageListFromView().map(item => item.url);
        return visibleImageList.filter(url => selectedImageList.includes(url));
    }

    useEffect(() => {
        if (!isDev) {
            loadImages();
        }
        // 清理函数：组件卸载时清理资源
        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
                intervalId.current = 0;
            }
        };
    }, []);

    useEffect(() => {
        if (!isDev) {
            // 延迟启动 loadMoreImages，给 loadImages 一些时间完成
            const timeoutId = setTimeout(() => {
                loadMoreImages();
            }, 2000);
            
            return () => {
                clearTimeout(timeoutId);
                if (intervalId.current) {
                    clearInterval(intervalId.current);
                    intervalId.current = 0;
                }
            };
        }
    }, []);
    const imageDataList: ImageType[] = getImageListFromView();

    return (
        <Box paddingTop="12px" maxW="1400px" mx="auto" px="16px">
            {/* Stats Header */}
            <Box className="stats-header">
                <Stack spacing={2}
                       direction="row"
                       align="center"
                       display="flex"
                       justifyContent="space-between"
                       flexWrap="wrap"
                >
                    <Text className="stats-text" display="flex" alignItems="center" flexWrap="wrap" gap="6px">
                        共采集到
                        <Tag size="md" key="all" variant="solid" colorScheme="yellow"
                             padding="4px 10px"
                             borderRadius="6px"
                             className="stats-number">
                            {imageList.length}
                        </Tag>张图片，
                        已选择
                        <Tag size="md" key="select" variant="solid" colorScheme="green"
                             padding="4px 10px"
                             borderRadius="6px"
                             className="stats-number">
                            {getSelectList().length}
                        </Tag>
                        张照片
                    </Text>
                    <Box className="action-buttons">
                        <Button colorScheme="green"
                                size="sm"
                                onClick={selectAll}
                                borderRadius="6px"
                                fontWeight="600"
                                px="12px"
                                py="6px">全选</Button>
                        <Button colorScheme="gray"
                                size="sm"
                                onClick={reset}
                                borderRadius="6px"
                                fontWeight="600"
                                px="12px"
                                py="6px">取消选择</Button>
                    </Box>
                </Stack>
            </Box>

            {/* Filter Section */}
            <Box className="filter-section">
                <Stack spacing={2}
                       direction="row"
                       align="center"
                       flexWrap="wrap"
                >
                    <Text className="filter-label" mr="12px">
                        尺寸不小于
                    </Text>
                    <RadioGroup onChange={(newValue: string) => setLimitSize(+newValue)} value={String(limitSize)}>
                        <Stack direction="row" spacing={3} flexWrap="wrap">
                            <Radio value="0" colorScheme="yellow">无限制</Radio>
                            <Radio value="100" colorScheme="yellow">100 × 100</Radio>
                            <Radio value="400" colorScheme="yellow">400 × 400</Radio>
                            <Radio value="600" colorScheme="yellow">600 × 600</Radio>
                            <Radio value="800" colorScheme="yellow">800 × 800</Radio>
                            <Radio value="1200" colorScheme="yellow">1200 × 1200</Radio>
                        </Stack>
                    </RadioGroup>
                </Stack>
            </Box>

            {/* Image Grid */}
            <ul id="image-list">
                {
                    imageDataList.map((imageData, index) => {
                        return (
                            <ImageWrapper {...imageData}
                                   selected={selectedImageList.includes(imageData.url)}
                                   onImageLoad={onImageLoad}
                                   onSelectionChange={onSelectionChange}
                                   key={imageData.url + index}/>
                        );
                    })
                }
            </ul>

            {/* Download Button - Fixed */}
            <Box className="download-button-container">
                <Button rightIcon={<DownloadIcon />}
                        bg="brand.800"
                        color="brand.50"
                        size="lg"
                        onClick={downloadImage}
                        borderRadius="12px"
                        fontWeight="700"
                        fontSize="16px"
                        px="24px"
                        py="24px"
                        boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"
                        border="1px solid"
                        borderColor="accent.400"
                        _hover={{
                            bg: "brand.700",
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                        }}
                        _active={{
                            bg: "brand.900",
                            transform: 'translateY(0)',
                        }}>下载</Button>
            </Box>
        </Box>
    );
}

export default App;
