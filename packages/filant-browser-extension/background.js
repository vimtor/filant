chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ ide: 'VSCODE' })
})

chrome.contextMenus.create({
  id: 'filant',
  title: 'Open in editor',
  contexts: ['all'],
})

chrome.runtime.onMessage.addListener(message => {
  chrome.contextMenus.update('filant', {
    visible: !!message,
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
          // Configured in File | Settings | Build, Execution, Deployment | Debugger | Built-in Server
          fetch(`http://localhost:63342/api/file/${path}`)
          break
        case 'VSCODE':
          openTab(`vscode://file/${path}`)
          break
        case 'VSCODE_INSIDERS':
          openTab(`vscode-insiders://file/${path}`)
          break
        case 'ATOM':
          // For Atom, install this plugin: https://atom.io/packages/open, then open a new tab to:
          openTab(`atom://open?url=${url}`)
          break
        case 'VIM':
          // For Vim, Sublime and GVim research: https://github.com/sshkarupa/url-handlers, then open a new tab to:
          // vim://open/?url=file://<file_path>&line=<line>&column=<column>
          break
        case 'SUBLIME_TEXT':
          // For Vim, Sublime and GVim research: https://github.com/sshkarupa/url-handlers, then open a new tab to:
          // vim://open/?url=file://<file_path>&line=<line>&column=<column>
          break
        case 'TEXT_MATE':
          openTab(`txmt://open?url=${url}`)
          break
        default:
          console.error(`'${ide}' is not a supported IDE. Falling back to VSCode`)
          chrome.storage.sync.set({ ide: 'VSCODE' })
          openTab(`vscode://file/${dataAttribute}`)
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
