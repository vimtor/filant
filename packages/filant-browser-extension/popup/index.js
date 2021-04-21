const ideButtons = document.querySelectorAll('.ide__item')
const instructionForwardButton = document.querySelector('[aria-label="see instructions"]')
const instructionsBackButton = document.querySelector('.instructions__back')
const instructionsSection = document.querySelector('.instructions')

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

instructionForwardButton.addEventListener('click', () => {
  instructionsSection.classList.remove('instructions--hidden')
})

instructionsBackButton.addEventListener('click', () => {
  instructionsSection.classList.add('instructions--hidden')
})
