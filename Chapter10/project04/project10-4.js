"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Ricky Berliant
    Date:   10/31/2024

    Filename: project10-04.js
*/




// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for (let items of pieces) {
    items.draggable = "true";
    items.ondragstart = function(e) {
       e.dataTransfer.setData("text", e.target.id);
    }
 }
    
// Enable drop functionality on board squares
for (let i = 0; i < boardSquares.length; i++) {
    boardSquares[i].addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  
    boardSquares[i].addEventListener("drop", (e) => {
      e.preventDefault();
      let pieceId = e.dataTransfer.getData("text");
      let movingPiece = document.getElementById(pieceId);
  
      if (e.target.tagName === "TD") {
        e.target.appendChild(movingPiece);
      } else if (e.target.tagName === "SPAN") {
        let occupyingPiece = e.target;
        let square = occupyingPiece.parentNode;
        square.appendChild(movingPiece);
  
        if (occupyingPiece.className === "white") {
          whiteBox.appendChild(occupyingPiece);
        } else {
          blackBox.appendChild(occupyingPiece);
        }
      }
    });
  }
  

