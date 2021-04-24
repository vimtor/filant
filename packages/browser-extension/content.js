let dataAttributeFilant = null

document.addEventListener('mouseover', event => {
  dataAttributeFilant = event.target.getAttribute('data-filant')
  chrome.runtime.sendMessage(dataAttributeFilant)
})

document.addEventListener('contextmenu', event => {
  dataAttributeFilant = event.target.getAttribute('data-filant')
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getDataAttribute') {
    sendResponse(dataAttributeFilant.toString())
  }
  return true
})
