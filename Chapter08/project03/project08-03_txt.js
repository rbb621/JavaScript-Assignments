"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: 
      Date:   

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/


/* 

Scroll down to the buildPizza() function. This function builds a pizza object based on selections made on the web form. Add the following code to the function.

Create an instance of a Pizza object storing it in myPizza.

Set the value of myPizza.size to pizzaSizeBox.value. Set the value of myPizza.crust to pizzaCrustBox.value.

Add the selected toppings to the pizza by creating a for loop that iterates through the contents of the checkedToppings node list. Within the loop,

create an instance of a Topping object named myTopping;

set myTopping.name equal to checkedToppings[i].name and myTopping.side equal to checkedToppings[i]value;

apply the addTopping(myTopping) method to myPizza.

After the for loop, return the value of myPizza.

Go to the updateCart() function, which adds the pizza to the shopping cart. Add the following commands to the function:

Run the buildPizza() function, storing the result in the myPizza variable.

Apply the addItem(myPizza) method to the cart object.

Run the console.log(cart) method to write the contents of the cart object to the debugger console.

Create a paragraph element containing the value of summarize(myPizza). Use the appendChild() method to append the paragraph to the cartBox element.

Reset the page for the next pizza by running the clearPizzaImage() function followed by the clearToppings() function.

*/


// Step 4
/*
Step 3
Create an object literal named cart. 
The cart object has a single property named items containing an empty array and a single method named addItem(foodItem) 
Add the command this.items.push(foodItem) to this method.
*/

let cart = {
   items: [],
   addItem(foodItem){
      this.items.push(foodItem);
   }
};

// Step 4
/* 
Create a constructor function for the Pizza object class containing a size and crust property 
with no initial values and a toppings property containing an empty array.
*/

class Pizza {
   constructor (size, crust){
      this.size = size;
      this.crust = crust;
   }
}


// Step 5
/*
Create a constructor function for the Topping object class containing the name and side property to store the name 
of the topping and whether covers the entire pizza or is limited to the pizza’s left or right side. 
Do not enter initial values for these properties.
*/

class Topping {
   constructor(name, side){
      this.name = name,
      this.side = side,
      this.toppings = [];
   }
}

// Step 6
/*
Add the addToCart(cart) method to the Pizza prototype. 
Within the method run the command cart.items.push(this) to add the pizza to the items array of a shopping cart.
*/

Pizza.prototype.addToCart = function(cart) {
   cart.items.push(this);
}

// Step 7
/*
Add the summarize() method to the Pizza prototype to create a text string summarizing the content of the pizza. 

1.
Within the function do the following:
Declare a variable named summary with the initial value “Pizza: “.

2.
Add the value of this.size and this.crust to the value of summary. Separate the size and crust values with a blank space.

3.
Create a for loop that iterates through the this.toppings array. 
For each item in the array add the text string name (side) to the summary variable, where name is the value of the this.toppings[i].name property 
and side is the value of the this.toppings[i].side property.

4.
After the for loop, return the value of the summary variable.

*/

Pizza.prototype.summarize = function() {
   let summary = "Pizza " + this.size + " " + this.crust + " ";
}

/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 


}    

// Function to add the built pizza to the shopping cart
function updateCart() {


}  
