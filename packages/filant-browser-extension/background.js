const ides ={
  idea: "idea",
  vscode: "vscode"
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ide:ides.idea})
})

chrome.contextMenus.create({
  id: '1',
  title: 'Open in editor',
  contexts: ['all'],
})

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, 'getElement', response => {
    chrome.storage.sync.get("ide", ({ide}) =>{
      console.log(ide)
      switch (ide) {
        case ides.idea:
          fetch(`http://localhost:63342/api/file/${response.data}`).then(()=>{console.log("Sended");});
          break;

        case ides.vscode:
          console.log("vscode");
          break;

        default:
          console.log("default ide not set");
          break;
      }
    })
    // For IDEA products (Webstorm, IntelliJ), send a GET request to:
    // http://localhost:63342/api/file/<file_path>
    // Configured in File | Settings | Build, Execution, Deployment | Debugger | Built-in Server

    // For VSCode, open a new tab to:
    // vscode://file/<file_path>

    // For VSCode Insiders, open a new tab to:
    // vscode-insiders://file/<file_path>

    // For Atom, install this plugin: https://atom.io/packages/open, then open a new tab to:
    // atom://open?url=file://<file_path>&line=<line>&column=<column>

    // For Vim, Sublime and GVim research: https://github.com/sshkarupa/url-handlers, then open a new tab to:
    // vim://open/?url=file://<file_path>&line=<line>&column=<column>

    // For TextMate, open a new tab:
    // txmt://open?url=file://<file_path>&line=<line>&column=<column>
  })
})
