import iconLogo from '/icon.png';
import './App.css';

function App() {
    async function getAllImagesFromWebsite() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        let [tab] = await chrome.tabs.query(queryOptions);
        // const response = await chrome.tabs.sendMessage(tab.id, {
        //     type: 'getAllImages',
        // });
        // console.log('allImages========', response);

        await chrome.tabs.create({
            url: 'download/index.html?tabId=' + tab?.id
        })
    }

    return (
        <>
            <div>
                <img src={iconLogo} className="logo" alt="logo"/>
            </div>
            <div className="card">
                <button onClick={getAllImagesFromWebsite}>
                    提取当前网页图片
                </button>
            </div>
        </>
    );
}

export default App;
