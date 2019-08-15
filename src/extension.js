/** Extension handler */

class Extension {
  constructor() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {data: 1}, res => {
        console.log(res);
      });
    });
  }
}

export default Extension;
