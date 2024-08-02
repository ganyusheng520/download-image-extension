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
    async function loadImages() {
        const tabId = getParamFromUrl('tabId');
        const response: any = await chrome.tabs.sendMessage(+tabId, {
            type: 'getAllImages',
        });
        const {title, imageList} = response;
        setImageList(imageList);
        chrome.downloads.onDeterminingFilename.addListener(
            function (downloadItem, suggest) {
                suggest({
                    filename: `${filenamify(title) || 'images'}/${downloadItem.filename}`,
                });
            }
        )
        Log.info('imageList', title, imageList);
    }

    function loadMoreImages() {
        intervalId.current = setInterval(async () => {
            const tabId = getParamFromUrl('tabId');
            const response: any = await chrome.tabs.sendMessage(+tabId, {
                type: 'getFetchImageList',
            });
            Log.info('getFetchImageList', response?.imageList);
            if (response?.imageList?.length > 0) {
                setImageList((list) => {
                    return [...list, ...response.imageList];
                })
            }
        }, 10 * 1000)
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
            loadMoreImages();
        }
        return () => {
            clearInterval(intervalId.current);
        }
    }, [])

    useEffect(() => {
        if (!isDev) {
            loadImages();
        }
    }, []);
    const imageDataList: ImageType[] = getImageListFromView();

    return (
        <Box paddingTop="16px">
            <Stack spacing={4}
                   direction="row"
                   align="center"
                   mb="16px"
                   display="flex"
                   justifyContent="space-between"
            >

                <Text fontSize="md" display="flex" alignItems="center">
                    共采集到
                    <Tag size="14px" key="all" variant="solid" colorScheme="yellow"
                         padding="2px 8px"
                         ml="4px" mr="4px">
                        {imageList.length}
                    </Tag>张图片，
                    已选择
                    <Tag size="14px" key="select" variant="solid" colorScheme="green"
                         padding="2px 8px"
                         ml="4px" mr="4px">
                        {getSelectList().length}
                    </Tag>
                    张照片
                </Text>
                <Box>
                    <Button colorScheme="green"
                            size="md"
                            mr="16px"
                            onClick={selectAll}>全选</Button>
                    <Button colorScheme="gray"
                            size="md"
                            onClick={reset}>取消选择</Button>
                </Box>

            </Stack>
            <Stack spacing={4}
                   direction="row"
                   align="center"
                   mb="16px"
            >
                <Tag size="lg" key="lg" variant="outline" colorScheme="blue" mr="16px">
                    尺寸不小于
                </Tag>
                <RadioGroup onChange={(newValue: string) => setLimitSize(+newValue)} value={String(limitSize)}>
                    <Stack direction="row">
                        <Radio value="0">无限制</Radio>
                        <Radio value="100">100 * 100</Radio>
                        <Radio value="400">400 * 400</Radio>
                        <Radio value="600">600 * 600</Radio>
                        <Radio value="800">800 * 800</Radio>
                        <Radio value="1200">1200 * 1200</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
            {/*<Stack spacing={4} direction="row"*/}
            {/*       align="center" mb="24px">*/}
            {/*    <Tag size="lg" key="lg" variant="outline" colorScheme="blue" mr="16px">*/}
            {/*        图片的格式*/}
            {/*    </Tag>*/}
            {/*    <CheckboxGroup colorScheme="green"*/}
            {/*                   defaultValue={typeFilter}*/}
            {/*                   onChange={onTypeFilterChange}*/}
            {/*    >*/}
            {/*        <Stack spacing={[1, 5]} direction={['column', 'row']}>*/}
            {/*            <Checkbox value="png">PNG</Checkbox>*/}
            {/*            <Checkbox value="jpg">JPG</Checkbox>*/}
            {/*            <Checkbox value="jpeg">JPEG</Checkbox>*/}
            {/*            <Checkbox value="gif">GIF</Checkbox>*/}
            {/*            <Checkbox value="webp">WEBP</Checkbox>*/}
            {/*        </Stack>*/}
            {/*    </CheckboxGroup>*/}
            {/*</Stack>*/}
            <Stack position="fixed" right={2} bottom={12}>
                <Button rightIcon={<DownloadIcon />}
                        colorScheme="blue"
                        size="lg"
                        onClick={downloadImage}>下载</Button>
            </Stack>
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
        </Box>
    );
}

export default App;
