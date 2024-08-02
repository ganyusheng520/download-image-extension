import {ImageFileType} from '../components/Image';
import {mockDataList} from '../mock';
import {isDev} from '../config/env';
import filenamify from 'filenamify';

export function getParamFromUrl(name) {
    const params = new URLSearchParams(location.search);
    return params.get(name);
}

export function getFileNameFromUrl(url) {
    if (url.startsWith('data:image')) {
        return url.slice(-10) + '.png';
    }
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    return pathname.substring(pathname.lastIndexOf('/') + 1);
}

export function getImageSuffixFromContentType(contentType: string): ImageFileType {
    return contentType.split('/')[1] as ImageFileType;
}


export function patchImageName(url:string, folder: string) {
    return `${filenamify(folder)}/` + getFileNameFromUrl(url);
}

export function getInitImageList() {
    if (isDev) {
        return mockDataList;
    }
    return [];
}

