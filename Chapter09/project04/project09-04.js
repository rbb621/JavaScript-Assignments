"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Ricky Berliant
      Date:   10/23/2024

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
    if(document.cookie) {
        bestText.textContent = getBestTime() + " seconds";
    }
});

function getBestTime() {
    if(document.cookie) {
    let cookieArray = document.cookie.split("=");
    return parseInt(cookieArray[1]);
}
else {
    return 9999;
}
}  

/*

Write the following text string to the document.cookie object, 
setting the max age of the cookie to 90 days:

where best is the value of the bestTime variable.

*/

function updateRecord() {
    let solutionTime = parseInt(document.getElementById("timer").value);
    
    let bestTime = getBestTime();
    
    if (solutionTime < bestTime){
        bestTime = solutionTime;
    }
    let maxAge = 60*60*24*90;

    bestText.textContent = bestTime + " seconds";
    document.cookie = "puzzle8Best" +  bestTime + "maxage =" + maxAge;       


}