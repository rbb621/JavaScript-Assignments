/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: 
      Date:   

      Filename: project02-03.js
 */


      document.getElementById("square").onmouseover = function() 
      {
            document.getElementById("feedback_square").innerHTML = "You are hovering over a square";
      };

      document.getElementById("triangle").onmouseover = function() {
            document.getElementById("feedback_triangle").innerHTML = "You are hovering over a triangle";
      }

      document.getElementById("circle").onmouseover = function() {
            document.getElementById("feedback_circle").innerHTML = "You are hovering over a circle";
      }





      document.getElementById("square").onmouseout = function () 
      {
            document.getElementById("feedback_square").innerHTML = "";
      };

      document.getElementById("triangle").onmouseout = function () 
      {
            document.getElementById("feedback_triangle").innerHTML = "";
      };

      document.getElementById("circle").onmouseout = function () 
      {
            document.getElementById("feedback_circle").innerHTML = "";
      };





