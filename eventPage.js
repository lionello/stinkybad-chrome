chrome.omnibox.setDefaultSuggestion({ description: "Go to nounly %s" });

chrome.omnibox.onInputEntered.addListener(function (text, disposition) {
    if (/^[a-zA-z]+([- ][a-zA-z]+)* *$/.test(text)) {
        chrome.tabs.create({ url: "http://nounly.com/" + text });
    }
    else {
        chrome.tabs.create({ url: "http://nounly.com/?" + encodeURIComponent(text) });
    }
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.create({ url: "http://nounly.com/?" + encodeURIComponent(info.linkUrl) });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({ id: "sb0", title: "Nounly this link", contexts: ["link"], targetUrlPatterns: ["http://*/*", "https://*/*"] });
});
