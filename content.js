
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

setTimeout(() => {
  const tiketTitle = document.querySelector(
    "*[data-test-id='issue.views.issue-base.foundation.summary.heading']"
  );

  let target = document.querySelector(
    "*[data-testid='create-button-wrapper']"
  );

  let ticket="";

  if (typeof window !== "undefined") {
    let url = window.location.href;
    let title = '';

    if (url.indexOf(".atlassian.net") > -1) {
      // check for Jira issue
      if ( url.indexOf("/browse/") > -1) {
        ticket =  url.split("browse/")[1];
      }
      if ( url.indexOf("selectedIssue=") > -1) {
        ticket =  url.split("selectedIssue=")[1];
      }
      let div = document.createElement("div");
      div.id = "brancher-content";
      target.appendChild(div);
    }

    if (tiketTitle) {
      title = `ticket/${ticket}-${slugify(tiketTitle.textContent)}`;
      div.innerHTML=title;
      
    } else {
      console.log("Ticket not found");
    }
  }

  
},3000);






