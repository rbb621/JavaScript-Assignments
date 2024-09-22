"use strict";
/*   JavaScript 7th Edition
     Chapter 5
     Project 05-01


     Project to present an online quiz with a countdown clock
     Author: Ricky Berliant
     Date:   09/25/2024


     Filename: project05-01.js
*/


const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

quizClock.value = quizTime;
let timeLeft = quizTime;

let timeID;
const questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   timeID = setInterval(countDown, 1000);
}

function countDown(){
    if (timeLeft === 0){
        clearInterval(timeID);
        let totalCorrect = checkAnswers();
        if (totalCorrect === correctAnswers.length) 
            {
                alert("Congratulations! You got 100%.");
            } 
            else {
                window.alert(`You got ${correctAnswers.length - totalCorrect} questions incorrect out of ${correctAnswers.length}.`)
            }
            timeLeft = quizTime;
            quizClock.value = timeLeft;
            overlay.className = "hidequiz";
        }   
        else {
        timeLeft--;
        quizClock.value = timeLeft;
    }
}






/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;
 
  for (let i = 0; i < questionList.length; i++) {
     if (questionList[i].value === correctAnswers[i]) {
        correctCount++;
        questionList[i].className = "";
     } else {
        questionList[i].className = "wronganswer";
     }     
  }
  return correctCount;
}

