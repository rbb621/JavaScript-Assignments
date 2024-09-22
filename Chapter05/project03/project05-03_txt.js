"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let i = 0; i < sourceDoc.childNodes.length; i++) {
      let node = sourceDoc.childNodes[i];
      if (node.nodeName === heading) {
            let anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount);
            node.insertBefore(anchor, node.firstChild);


            // Create an element node named listItem for the li element
            let listItem = document.createElement("li");

            // Create an element node named link for the a element
            let link = document.createElement("a");

            // Append link to listItem
            listItem.appendChild(link);

            // Set the value of the textContent property of link
            link.textContent = node.textContent;
            
            // Set the value of the href property of link
            link.href = "#doclink" + headingCount;

            // Append listItem to the toc object
            toc.appendChild(listItem);
            headingCount++;

      }
}