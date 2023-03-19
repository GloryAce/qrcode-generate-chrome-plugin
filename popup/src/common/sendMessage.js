export default function setMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, message, res => {
            callback && callback(res);
        })
    });
}