import {isDev} from '../config/env';
import FileSaver from 'file-saver';
import Log from './log';
import {getFileNameFromUrl} from './index';
// import { fileSave } from 'browser-fs-access';

async function saveFile(blob, suggestedName) {
    // Feature detection. The API needs to be supported
    // and the app not run in an iframe.
    const supportsFileSystemAccess =
        'showSaveFilePicker' in window &&
        (() => {
            try {
                return window.self === window.top;
            } catch {
                return false;
            }
        })();
    // If the File System Access API is supported…
    if (supportsFileSystemAccess) {
        try {
            // Show the file save dialog.
            const handle = await showSaveFilePicker({
                suggestedName,
            });
            // Write the blob to the file.
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
            return;
        } catch (err) {
            // Fail silently if the user has simply canceled the dialog.
            if (err.name !== 'AbortError') {
                Log.error(err.name, err.message);
                return;
            }
        }
    }
    // Fallback if the File System Access API is not supported…
    // Create the blob URL.
    const blobURL = URL.createObjectURL(blob);
    // Create the `<a download>` element and append it invisibly.
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = suggestedName;
    a.style.display = 'none';
    document.body.append(a);
    // Programmatically click the element.
    a.click();
    // Revoke the blob URL and remove the element.
    setTimeout(() => {
        URL.revokeObjectURL(blobURL);
        a.remove();
    }, 1000);
}

export function download(url) {
    if (isDev) {
        return FileSaver.saveAs(url, getFileNameFromUrl(url));
    }
    return new Promise((resolve, reject) => {
        chrome.downloads.download({
            url,
        }, (downloadId) => {
            if (!downloadId) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                    Log.warn(`${url}:`, chrome.runtime.lastError.message);
                }
            } else {
                resolve(downloadId);
            }
        });
})

}
