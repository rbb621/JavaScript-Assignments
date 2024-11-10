"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Ricky Berliant
      Date:   11/14/2024

      Filename: project12-02.js
*/

// $("#cValue").change(function(e) 
// {
//     let celsius = $(e.target).val();
//     let fahrenheit = (1.8 * celsius) + 32;
//     $('#fValue').val(fahrenheit.toFixed(0))
// });

// $("#fValue").change( function(e) 
// {
//     let fahrenheit = $(e.target).val();
//     let celsius = (fahrenheit - 32) / 1.8;
//     $("#cValue").val(celsius.toFixed(0))
// });


$("#cValue").change(e => {
    let celsius = $(e.target).val();
    let fahrenheit = (1.8 * celsius) + 32;
    $('#fValue').val(fahrenheit.toFixed(0))
});

$("#fValue").change(e => {
    let fahrenheit = $(e.target).val();
    let celsius = (fahrenheit - 32) / 1.8;
    $("#cValue").val(celsius.toFixed(0))
});