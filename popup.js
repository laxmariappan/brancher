window.addEventListener(
  "load",
  function () {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        // sendResponse({
        //     data: message.data
        // });
        document.getElementById("result").innerHTML = message.data;
    });
  },
  false
);

