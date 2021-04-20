const ideButtons = document.querySelectorAll('.ide-grid > [data-ide]')

chrome.storage.sync.get('ide', ({ ide: selectedIde }) => {
  ideButtons.forEach(ideButton => {
    if (ideButton.getAttribute('data-ide') === selectedIde) {
      ideButton.classList.add('selected')
    }
  })
})

ideButtons.forEach(ideButton => {
  ideButton.addEventListener('click', () => {
    ideButtons.forEach(ideButton => ideButton.classList.remove('selected'))
    ideButton.classList.add('selected')
    chrome.storage.sync.set({ ide: ideButton.getAttribute('data-ide') })
  })
})
