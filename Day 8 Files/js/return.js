
 /*
Nick Boruch
WPF 1407
7/23/14
ReturningValues
 */

//alert("Testing 1,2,3");

//Create a function to calculate the area of a rectangle

function calcArea(w,h){

    //Calculate the area
    var area = w*h;

//console.log (area);

   //Return the variable area to our main code
   return area;

}

//Function call
//Create a variable to catch the returned value!

//User prompts
var width = prompt("Let's calculate the area of a rectangle\nPlease enter a width:");
var height = prompt("Please enter a height:");

var results = calcArea(width,height);


console.log("The area of your rectangle is "+results);


