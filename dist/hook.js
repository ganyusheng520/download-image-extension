
(function () {
    const imageUrlRegex = /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:bmp|gif|ico|jfif|jpe?g|png|svg|tiff?|webp))(?:\?([^#]*))?(?:#(.*))?/i;
    function extractImageFromElement(element) {
        if (element.tagName.toLowerCase() === 'img') {
            const src = element.currentSrc || element.src;
            const hashIndex = src.indexOf('#');
            return hashIndex >= 0 ? src.substring(0, hashIndex) : src;
        }

        if (element.tagName.toLowerCase() === 'image') {
            const src = element.getAttribute('xlink:href');
            const hashIndex = src.indexOf('#');
            return hashIndex >= 0 ? src.substring(0, hashIndex) : src;
        }

        if (element.tagName.toLowerCase() === 'a') {
            const href = element.href;
            if (isImageURL(href)) {
                return href;
            }
        }

        const backgroundImage = window.getComputedStyle(element).backgroundImage;
        if (backgroundImage) {
            const parsedURL = extractURLFromStyle(backgroundImage);
            if (isImageURL(parsedURL)) {
                return parsedURL;
            }
        }
    }

    function isImageURL(url) {
        return url.indexOf('data:image') === 0 || imageUrlRegex.test(url);
    }

    function extractURLFromStyle(style) {
        return style.replace(/^.*url\(["']?/, '').replace(/["']?\).*$/, '');
    }

    function relativeUrlToAbsolute(url) {
        return url.indexOf('/') === 0 ? `${window.location.origin}${url}` : url;
    }

    function unique(values) {
        return toArray(new Set(values));
    }

    function toArray(values) {
        return [...values];
    }

    function isTruthy(value) {
        return !!value;
    }

    function extractImagesFromSelector(selector) {
        return unique(
            toArray(document.querySelectorAll(selector))
                .map(extractImageFromElement)
                .filter(isTruthy)
                .map(relativeUrlToAbsolute)
        );
    }

    window.addEventListener('load', (event) => {
        // chrome.runtime.sendMessage({
        //     type: 'sendImages',
        //     allImages: imageList,
        //     linkedImages: extractImagesFromSelector('a'),
        //     origin: window.location.origin,
        // });
        console.log('hook.js loaded');
    });

    function onMessage(message, sender, sendResponse) {
        console.log('onMessage', message);
        if (message.type === 'getAllImages') {
            const imageList = extractImagesFromSelector('img, image, a, [class], [style]');
            sendResponse({
                type: 'allImages',
                imageList,
                title: document.title,
            });
        }
        if (message.type === 'getFetchImageList') {
            const imageContainer = document.getElementById('__IMAGE_DOWNLOAD_SCRIPT_HOOK__')
            if (imageContainer && imageContainer.value) {
                const imageList = JSON.parse(imageContainer.value);
                sendResponse({
                    type: 'fetchImageList',
                    imageList,
                });
                imageContainer.value = JSON.stringify([]);
            }
        }
    }

    chrome.runtime.onMessage.addListener(onMessage)


})();
