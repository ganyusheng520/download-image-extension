import {Box, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spinner, IconButton} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function getPreviewImageSize (width: number, height: number) {
    if (width > 600 || height > 600) {
        return { width: 600, height: 600 };
    }
    return {width, height };
}

export type PreviewProps = {
    imageList: Array<{url: string; width?: number; height?: number}>;
    currentIndex: number;
    isOpen?: boolean;
    onClose: () => void;
    onIndexChange?: (index: number) => void;
}

export default function Preview({ imageList, currentIndex, isOpen, onClose, onIndexChange}: PreviewProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const currentImage = imageList[currentIndex];
    
    if (!currentImage) {
        return null;
    }
    
    const size = getPreviewImageSize(currentImage.width || 600, currentImage.height || 600);
    
    const handlePrevious = () => {
        if (imageList.length === 0) return;
        const newIndex = currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
        onIndexChange?.(newIndex);
    };
    
    const handleNext = () => {
        if (imageList.length === 0) return;
        const newIndex = currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
        onIndexChange?.(newIndex);
    };
    
    // 键盘事件处理
    useEffect(() => {
        if (!isOpen) return;
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, currentIndex, imageList.length, onIndexChange, onClose]);
    
    // 当索引改变时重置加载状态
    useEffect(() => {
        setLoading(true);
    }, [currentIndex]);
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay/>
            <ModalContent
                position="relative"
                maxW="90vw"
                maxH="90vh"
                bg="brand.900"
            >
                {/* 左侧箭头 */}
                {imageList.length > 1 && (
                    <IconButton
                        aria-label="上一张"
                        icon={<ChevronLeftIcon />}
                        position="absolute"
                        left="16px"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={10}
                        bg="rgba(16, 42, 67, 0.8)"
                        color="brand.50"
                        _hover={{
                            bg: "rgba(16, 42, 67, 0.95)",
                        }}
                        onClick={handlePrevious}
                        borderRadius="50%"
                        size="lg"
                    />
                )}
                
                {/* 右侧箭头 */}
                {imageList.length > 1 && (
                    <IconButton
                        aria-label="下一张"
                        icon={<ChevronRightIcon />}
                        position="absolute"
                        right="16px"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={10}
                        bg="rgba(16, 42, 67, 0.8)"
                        color="brand.50"
                        _hover={{
                            bg: "rgba(16, 42, 67, 0.95)",
                        }}
                        onClick={handleNext}
                        borderRadius="50%"
                        size="lg"
                    />
                )}
                
                {/* 图片索引指示器 */}
                {imageList.length > 1 && (
                    <Box
                        position="absolute"
                        top="16px"
                        left="50%"
                        transform="translateX(-50%)"
                        zIndex={10}
                        bg="rgba(16, 42, 67, 0.8)"
                        color="brand.50"
                        px="12px"
                        py="6px"
                        borderRadius="20px"
                        fontSize="14px"
                        fontWeight="600"
                    >
                        {currentIndex + 1} / {imageList.length}
                    </Box>
                )}
                
                {/* 加载指示器 */}
                {loading && (
                    <Box 
                        position="absolute"
                        width="100%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        zIndex={5}
                    >
                        <Spinner size="xl" color="accent.400"/>
                    </Box>
                )}
                
                <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
                    <Image 
                        src={currentImage.url} 
                        alt="" 
                        onLoad={() => setLoading(false)}
                        maxW="100%"
                        maxH="90vh"
                        objectFit="contain"
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
