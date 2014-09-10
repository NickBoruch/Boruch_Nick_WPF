
 /*
Nick Boruch
WPF 1407
9/08/14
Instructional Expressions
 */

//alert("Testing 1,2,3");


//Slice of Pie Part 1

var pizzaSlices=8;

//Amount of People at part

var partyGoers=4;

//Total amount of Pizzas ordered

var pizzasOrdered=6;

//Declare result

var result= (pizzaSlices*pizzasOrdered)/partyGoers;

//console.log out answer

console.log("Each Person ate "+result+ " slices of pizza at the party.");

//Slice of Pie Part 2
 //Make leftover variable

 var leftOvers = (pizzaSlices * pizzasOrdered) % partyGoers;

 //console.log out leftovers

 console.log("Sparky got "+leftOvers+" slices of pizza!");

//Average Shopping Bill

//Declare all 5 weeks of grocery bills

var weekOne=174.99;
var weekTwo=166.49;
var weekThree=209.85;
var weekFour=143.25;
var weekFive=109.81;

//Add up the Total

var total= weekOne+weekTwo+weekThree+weekFour+weekFive;

//Get the average

var average= (total)/5;

//console.log out average

console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week.");

//Discounts

//declare original price

var original=175;

//declare discount percent

var discount=.35;


//Declare item

var itemName="iPod";

//Declare sales tax of 6.5 since we live in florida

var salesTax=0.65;

//Figure out price without tax

var withoutTax = original*discount;

//Tax Included

 var withTax = original*salesTax;
 // Cost with tax

//Console.log out your answer

 console.log("Your "+itemName+" was originally $"+original+", but $"+withoutTax+" was deducted because of a 35% discount. The final price of your "+itemName+" will be "+withTax+" after sales tax is included.");