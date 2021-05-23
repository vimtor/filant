let dataAttributeFilant = null

document.addEventListener('contextmenu', event => {
    dataAttributeFilant = event.target.getAttribute('data-filant')
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getDataAttribute') {
      if (dataAttributeFilant) {
          sendResponse(dataAttributeFilant)
      } else {
          alert('This component does not have a data-filant attribute.')
      }
  }
  return true
})
