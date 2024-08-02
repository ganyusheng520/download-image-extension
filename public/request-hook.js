'use strict';

const hiddenElement = document.getElementById('__IMAGE_DOWNLOAD_SCRIPT_HOOK__');
const imageRegex = /(http|https):\/\/[^\s]+?\.(jpg|jpeg|png|gif|bmp|webp|svg)/gi;

if (hiddenElement) {
    console.log('start to hook request...');
    // Set.prototype.addAll = function(arr) {
    //     arr.forEach(item => this.add(item));
    // };
    window.__IMAGE_LIST_SET__ = new Set();
    const send = XMLHttpRequest.prototype.send;
    function updateImageList(imageList) {
        let images = hiddenElement.value;
        if (images) {
            images = JSON.parse(images) || [];
        } else {
            images = [];
        }
        imageList.forEach(image => {
            if (!__IMAGE_LIST_SET__.has(image)) {
                images.push(image);
                __IMAGE_LIST_SET__.add(image);
            }
        })
        hiddenElement.value = JSON.stringify(images);
    }
    XMLHttpRequest.prototype.send = function (data) {
        this.addEventListener('load', (function () {
            if (!this.responseType || this.responseType === 'text') {
                let imageList = this.responseText.match(imageRegex);
                if (Array.isArray(imageList)) {
                    console.log('xhr:response', imageList);
                    updateImageList(imageList);
                }
            }
        }), false);
        send.call(this, data);
    };

    const fetchFn = window.fetch;
    window.fetch = function () {
        return new Promise(((resolve, reject) => {
            fetchFn.apply(this, arguments).then((function (response) {
                response.clone && response.clone().text().then((function (resText) {
                    let imageList = resText.match(imageRegex);
                    if (Array.isArray(imageList)) {
                        console.log('fetch', arguments, imageList);
                        updateImageList(imageList);
                    }
                }));
                resolve(response);
            })).catch((function (response) {
                reject(response);
            }));
        }));
    };
} else {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.id = '__IMAGE_DOWNLOAD_SCRIPT_HOOK__';
    (document.head || document.documentElement).appendChild(hiddenInput);
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.runtime.getURL('request-hook.js');
    (document.head || document.documentElement).appendChild(script);
}

