/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */


      /* 
      ------FahrenheitToCelsius------
      Attach an anonymous function to the event handler and within the 
      anonymous function do the following:

      1. Declare a variable named cDegree equal to the value of the element with the id “cValue”.
      
      2. Set the value of the element with the id “fValue” to the value returned 
      by the CelsiusToFarenheit() function using cDegree as the parameter value.
      

      ------CelsiustoFahrenheit------
      Add an onchange event handler to the element with the id “fValue”. 
      Attach an anonymous function to the event handler and within the anonymous function do the following:
      
      1. Declare a variable named fDegree equal to the value of the element with the id “fValue”.
      
      2. Set the value of the element with the id “cValue” to the value returned by the FarenheitToCelsius() function using 
      fDegree as the parameter value.
      */
      

//       function FahrenheitToCelsius(degree) 
//       {
//             return (degree - 32)/1.8;
//       }


//       function CelsiustoFahrenheit (degree) 
//       {
//            return degree * 1.8 + 32;
//       }

//       // Add event listeners
//       document.getElementById("cValue").onchange = function() {
//       var degree = parseFloat(document.getElementById("cValue").value);
//       document.getElementById("fValue").value = CelsiustoFahrenheit(degree).toFixed(0);
//     };
    
//     document.getElementById("fValue").onchange = function() {
//       var degree = parseFloat(document.getElementById("fValue").value);
//       document.getElementById("cValue").value = FahrenheitToCelsius(degree).toFixed(0);
//     };


function FarenheitToCelsius (degree) {
      return (degree - 32)/1.8;
} 

function CelsiustoFahrenheit (degree) {
      return degree * 1.8 + 32;
}


document.getElementById("cValue").onchange = function () {
      let cDegree = parseFloat(document.getElementById("cValue").value);
      document.getElementById("fValue").value = CelsiustoFahrenheit(cDegree).toFixed(0);
}

document.getElementById("fValue").onchange = function () {
      let fDegree = parseFloat(document.getElementById("cValue").value);
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree).toFixed(0);
}