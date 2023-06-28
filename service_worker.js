chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: contentScriptFunc,
    args: ["action"],
  });
});

function contentScriptFunc(name) {
  console.log("name: ", name);
}

chrome.commands.onCommand.addListener((command) => {
  console.log("command: ", command);
});
