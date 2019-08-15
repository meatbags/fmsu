class Mangler {
  constructor() {
    chrome.runtime.onMessage.addListener(
      (req, sender, sendResponse) => {
        console.log(req);
        sendResponse({});
      }
    );
  }
}

export default Mangler;
