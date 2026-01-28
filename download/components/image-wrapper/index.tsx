import {useEffect, useRef, useState} from 'react';
import {getImageSuffixFromContentType} from '../../util';
import {Spinner} from '@chakra-ui/react';
import {
    Image,
    Box,
} from '@chakra-ui/react';
import Log from '../../util/log';

import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

export type ImageFileType = 'jpg' | 'png' | 'gif' | 'jpeg' | 'webp' | 'bmp' | 'ico' | 'jfif' | 'svg' | 'tif';
export type ImageType = {
    url: string;
    blob?: string;
    width?: number;
    height?: number;
    type?: ImageFileType;
    loaded?: boolean;
}

export type ImageProps = {
    selected?: boolean;
    onImageLoad: (image: ImageType) => void;
    onSelectionChange: (url: string) => void;
    onPreview?: (index: number) => void;
    index?: number;
} & ImageType;

export function ImageWrapper({url, selected, onImageLoad, onSelectionChange, onPreview, index}: ImageProps) {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const imageRef = useRef(null);
    const imageViewerRef = useRef<any>(null);

    // const [blob, setBlob] = useState<string>();
    // const [type, setType] = useState<ImageFileType>();
    useEffect(() => {
        return () => {
            if (imageViewerRef.current) {
                imageViewerRef.current = null;
            }
        };
    }, []);
    const fetchImage = async (url: string) => {
        try {
            const response = await fetch(url);
            const tempBlob = await response.blob();
            const contentType = response.headers.get('Content-type');
            const mediaType = getImageSuffixFromContentType(contentType);
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(tempBlob);
            // setBlob(imageUrl);
            // setType(mediaType);
        } catch (e) {
            onImageLoad({url, loaded: true});
            Log.warn('fetchImage error: ' + e?.message);
        } finally {
            setLoading(false);
        }

    };

    function onLoad(e) {
        setWidth(e.target.naturalWidth);
        setHeight(e.target.naturalHeight);
        setLoading(false);
        onImageLoad({url, width: e.target.naturalWidth, height: e.target.naturalHeight, loaded: true});
    }

    function onError() {
        setLoading(false);
        onImageLoad({url, loaded: true});
    }

    function onClick() {
        onSelectionChange(url);
    }

    function preview(e) {
        e.stopPropagation();
        // 使用新的预览方式
        if (onPreview && typeof index === 'number') {
            onPreview(index);
        } else {
            // 回退到旧的 viewerjs 方式
            if (imageViewerRef.current === null) {
                imageViewerRef.current = new Viewer(imageRef.current, {});
            }
            imageViewerRef.current.show();
        }
    }

    return (
        <li className={`image-wrapper ${selected ? 'selected' : ''}`} onClick={onClick}>
            {width ? (
                <Box className="image-size"
                     onClick={preview}
                >{width}×{height}</Box>
            ) : null}
            <Image ref={imageRef} alt=""
                   className="image"
                   src={url}
                   onLoad={onLoad}
                   onError={onError}
                   crossOrigin="anonymous"
            />
            {
                loading ? <Spinner className="loading-icon"/> : null
            }

            {
                !loading && !width ? <Image alt="fail" boxSize="64px" src="/image-error.png" /> : null
            }
        </li>
    );
}
