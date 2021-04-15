let element = null

document.addEventListener('contextmenu', event => {
  element = event.target.getAttribute('data-filant')
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message == 'getElement') {
    sendResponse({ data: element.toString() })
  }
  return true
})
