/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */

function verifyForm() { 
    var nameInput = document.getElementById("nameInfo").value;
    var emailInput = document.getElementById("emailInfo").value;
    var phoneInput = document.getElementById("phoneInfo").value;

    (nameInput && emailInput && phoneInput) ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}
document.getElementById("mamamia").addEventListener("click", verifyForm, false);