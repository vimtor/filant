chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ ide: 'VSCODE' })
})

chrome.contextMenus.create({
  id: 'filant',
  title: 'Open in editor',
  contexts: ['all'],
})

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, 'getDataAttribute', dataAttribute => {
    chrome.storage.sync.get('ide', ({ ide }) => {
      switch (ide) {
        case 'IDEA':
          // Configured in File | Settings | Build, Execution, Deployment | Debugger | Built-in Server
          fetch(`http://localhost:63342/api/file/${dataAttribute}`)
          break
        case 'VSCODE':
          window.open(`vscode://file/${dataAttribute}`)
          break
        case 'VSCODE_INSIDERS':
          window.open(`vscode-insiders://file/${dataAttribute}`)
          break
        case 'ATOM':
          // For Atom, install this plugin: https://atom.io/packages/open, then open a new tab to:
          // atom://open?url=file://<file_path>&line=<line>&column=<column>
          window.open(`atom://open?url=file://${dataAttribute}`)
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
          // For TextMate, open a new tab:
          // txmt://open?url=file://<file_path>&line=<line>&column=<column>
          break
        default:
          console.error(`'${ide}' is not a supported IDE. Falling back to VSCode`)
          chrome.storage.sync.set({ ide: 'VSCODE' })
          window.open(`vscode://file/${dataAttribute}`)
          break
      }
    })
  })
})
