let element = null

document.addEventListener('contextmenu', event => {
  element = event.target.getAttribute("data-filant")
  console.log(element)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(element)
  if (message == 'getElement') {
    sendResponse({ data: element.toString() })
  }
  return true
})
