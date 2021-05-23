const ideButtons = document.querySelectorAll('.ide__item')
const instructionForwardButton = document.querySelector('[aria-label="see instructions"]')
const instructionsBackButton = document.querySelector('.instructions__back')
const instructionsSection = document.querySelector('.instructions')
const ideExplanations = document.querySelectorAll('.explanation__item--hidden')

chrome.storage.sync.get('ide', ({ ide: selectedIde }) => {
  ideButtons.forEach(ideButton => {
    if (ideButton.getAttribute('data-ide') === selectedIde) {
      ideButton.classList.add('selected')
    }
  })
  ideExplanations.forEach(ideExplanation => {
    if (ideExplanation.getAttribute('data-ide') === selectedIde) {
      ideExplanation.classList.remove('explanation__item--hidden')
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

chrome.storage.onChanged.addListener((changes, _) => {
  const selectedIde = changes.ide.newValue
  ideExplanations.forEach(ideExplanation => {
    ideExplanation.classList.add('explanation__item--hidden')
    if (ideExplanation.getAttribute('data-ide') === selectedIde) {
      ideExplanation.classList.remove('explanation__item--hidden')
    }
  })
})

instructionForwardButton.addEventListener('click', () => {
  instructionsSection.classList.remove('instructions--hidden')
})

instructionsBackButton.addEventListener('click', () => {
  instructionsSection.classList.add('instructions--hidden')
})
