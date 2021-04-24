chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ ide: 'VSCODE' })
})

chrome.contextMenus.create({
  id: 'filant',
  title: 'Open in VSCode',
  contexts: ['page'],
})

chrome.runtime.onMessage.addListener(message => {
  chrome.contextMenus.update('filant', {
    visible: !!message,
  })
})

chrome.storage.onChanged.addListener(changes => {
  chrome.contextMenus.update('filant', {
    title: `Open in ${getIdeNameFromId(changes.ide.newValue)}`,
  })
})

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, 'getDataAttribute', dataAttribute => {
    if (!dataAttribute) {
      return
    }

    const path = createPath(dataAttribute)
    const url = createUrl(dataAttribute)

    chrome.storage.sync.get('ide', ({ ide }) => {
      switch (ide) {
        case 'IDEA':
          fetch(`http://localhost:63342/api/file/${path}`)
          break
        case 'VSCODE':
          openTab(`vscode://file/${path}`)
          break
        case 'VSCODE_INSIDERS':
          openTab(`vscode-insiders://file/${path}`)
          break
        case 'ATOM':
          openTab(`atom://open?url=${url}`)
          break
        case 'VIM':
          openTab(`vim://open?url=${url}`)
          break
        case 'SUBLIME_TEXT':
          openTab(`subl://open?url=${url}`)
          break
        case 'TEXT_MATE':
          openTab(`txmt://open?url=${url}`)
          break
        default:
          console.error(`'${ide}' is not a supported IDE. Falling back to VSCode`)
          chrome.storage.sync.set({ ide: 'VSCODE' })
          openTab(`vscode://file/${path}`)
          break
      }
    })
  })
})

function createPath(attribute) {
  const [file, line, column] = attribute.split('|')
  return `${file}:${line}:${column}`
}

function createUrl(attribute) {
  const [file, line, column] = attribute.split('|')
  return `file://${file}&line=${line}&column=${column}`
}

function openTab(url) {
  chrome.tabs.create({ url })
}

function getIdeNameFromId(id) {
  switch (id) {
    case 'IDEA':
      return 'IDEA'
    case 'VSCODE':
      return 'VSCode'
    case 'VSCODE_INSIDERS':
      return 'VSCode Insiders'
    case 'ATOM':
      return 'Atom'
    case 'VIM':
      return 'Vim'
    case 'SUBLIME_TEXT':
      return 'Sublime Text'
    case 'TEXT_MATE':
      return 'TextMate'
  }
}
