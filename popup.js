window.addEventListener(
  "load",
  function () {
    const query = { active: true, currentWindow: true };

    let ticket = '';

    chrome.tabs.query(query, (tabs) => {
      url = tabs[0].url;
      if(url.indexOf(".atlassian.net") > -1) {
        // check for Jira issue
        if (url.indexOf("/browse/") > -1 ){
            ticket = url.split("browse/")[1];
          }
          if (url.indexOf("selectedIssue=") > -1) {
            ticket = url.split("selectedIssue=")[1];
          }
      }
      //alert(ticket);
      document.getElementById("result").innerHTML = ticket;
    });

  },
  false
);