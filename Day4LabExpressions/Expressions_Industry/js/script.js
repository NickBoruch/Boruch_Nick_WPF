/*
Nicholas Boruch
9/10/14
Expressions: Industry
 */

//Alert the user what information your looking for

alert("Lets figure out how much tuition will cost for Full Sail Bachelor in Web Design!");

//Prompt user for tuition cost

var fullsailTuition = prompt("Please enter the tuition price.");

//Prompt user for how much of a scholorship they got is.

var scholorship = prompt("Please tell us how much your scholorship is worth.");

//Calculate total with scholorship

var total = Number(fullsailTuition)-Number(scholorship);

//console.log out

console.log("The total price of tuition with your scholorship is $"+total+".");

//Alert the user

alert("The total cost of your tuition is $"+total+".");

