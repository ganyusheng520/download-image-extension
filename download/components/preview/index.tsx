import {Box, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spinner} from '@chakra-ui/react';
import {useState} from 'react';

function getPreviewImageSize (width: number, height: number) {
    if (width > 600 || height > 600) {
        return { width: 600, height: 600 };
    }
    return {width, height };
}

export type PreviewProps = {
    url: string;
    width: number;
    height: number;
    isOpen?: boolean;
    onClose: () => void;
}

export default function Preview({ url, isOpen, width, height, onClose}: PreviewProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const size = getPreviewImageSize(width, height);
    return ( <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
            <ModalContent
            >
                {
                    loading ? <Box position="absolute"
                                   width="100%"
                                   height="100%"
                                   display="flex"
                                   alignItems="center"
                                   justifyContent="center"
                    >
                        <Spinner/>
                    </Box> : null
                }
                <Image src={url} alt="" onLoad={() => setLoading(false)}/>
            </ModalContent>
    </Modal>);
}
