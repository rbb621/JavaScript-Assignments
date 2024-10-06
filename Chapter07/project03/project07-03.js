"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Ricky Berliant
      Date:   10/11/2024

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// Setting the time to 1000 milliseconds per second
window.setInterval(countDown, 1000);

function countDown(){
    let today = new Date();
    currentTime.textContent = today.toLocaleString();
    
    let newYear = new Date("January 1st, 2024");
    let nextYear = today.getFullYear() + 1;

    newYear.setFullYear(nextYear);

    let daysLeft = (newYear - today)/(1000*60*60*24);
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    daysLeftBox.textContent = Math.floor(daysLeft);
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    minsLeftBox.textContent = Math.floor(minsLeft);
    secsLeftBox.textContent = Math.floor(secsLeft);
}