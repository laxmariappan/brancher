// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
    }

    if (tiketTitle) {
      title = `ticket/${ticket}-${slugify(tiketTitle.textContent)}`;
      console.log(title);
       chrome.runtime.sendMessage(
         {
           data: `${title}`,
         },
         function (response) {
           //console.dir(response);
         }
       );
      
    } else {
      console.log("Ticket not found");
    }
  }
  
},3000);





