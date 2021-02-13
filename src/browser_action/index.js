document.getElementById('openIGinNewTabForm').onsubmit = event => {
    event.preventDefault()
    let hashtag = document.getElementById('openIGinNewTabFormHashtag').value
    openLinkInNewTab(hashtag)
}

const openLinkInNewTab = (hashtag) => {
        var newURL = `http://instagram.com/explore/tags/${hashtag}`;
        chrome.tabs.create({ url: newURL });
}