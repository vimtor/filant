chrome.contextMenus.create({
  id: '1',
  title: 'Open in editor',
  contexts: ['all'],
})

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, 'getElement', response => {
    console.log(response)
  })
})
