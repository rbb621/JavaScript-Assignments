"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Ricky Berliant
      Date:   09/27/2024

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

const footnotes = [
	"A common man without refinement.",
	"Outrageous or shocking.",
	"Self-deception or imagination.",
	"Pale or white.",
	"Appearance or face.",
	"A figure from Greek mythology.",
	"A hint or suggestion.",
	"Dull-witted or slow.",
	"Unprepared or lacking purpose.",
	"The top of the head.",
	"As deep as the lungs.",
	"By God's wounds.",
	"Sensitive or cowardly.",
	"Before this.",
	"Scavenging birds.",
	"The remains or entrails of a slaughtered animal.",
	"Unkind or heartless.",
	"To curse or condemn.",
	"A scullery maid.",
	"Foulness or repulsion.",
	"The cunning nature of the play.",
	"To probe deeply.",
	"To hesitate or falter.",
	"The spirit may deceive me into damnation.",
	"More relevant or significant.",
	"The play's performance will reveal the king's conscience."
];



      for(let i = 0; i < phrases.length; i++){
      phrases[i].onclick = function(){

      let phrase = document.createElement("h1");
      phrase.textContent = this.textContent;
            
            
      let footnote = document.createElement("p");
      footnote.style.fontStyle = "italic"; 
      footnote.style.fontSize = "1.2em";
      footnote.textContent = footnotes[i];
            
      let closeButton = document.createElement('input');
      closeButton.type = 'button';
      closeButton.value = 'Close Footnote';
      closeButton.style.display = "block";
      closeButton.style.margin = "10px auto";
 
      
      let popup = window.open("", "footnote", "width=300, height=200, top=100, left=100");

      popup.document.body.style.backgroundColor = 'ivory';
      popup.document.body.style.fontSize = '16px';
      popup.document.body.style.padding = '10px';

      popup.document.body.appendChild(phrase);
      popup.document.body.appendChild(footnote);
      popup.document.body.appendChild(closeButton);


      closeButton.onclick = function()
      {
      popup.close();
      };
      };
}