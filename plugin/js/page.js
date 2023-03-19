chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.cmd === 'getUrl') {
        sendResponse({
            url: window.location.href
        });
    }
});