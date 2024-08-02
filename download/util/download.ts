import {download} from './native';

let promiseQueue = [];

export function downloadImages(urlList: string[]) {
    if (promiseQueue.length === 0) {
        urlList.forEach((url) => {
            promiseQueue.push(download(url));
        });
        return Promise.allSettled(promiseQueue).then((results) => {
                promiseQueue = [];
                const successList = results.filter((result) => result.status === 'fulfilled');
                return successList.length;
            }
        );
    }
    return Promise.reject(new Error('downloading images'));
}
