
 /*
Nick Boruch
WPF 1407
7/23/14
Scope
 */

//alert("Testing 1,2,3");

//Variable Scope
//Variables inside & outside of a function


//Try not to use the same variable names....BUT
//In large files this might be impossible

//Create a variable for width in our MAIN code
//In MAIN code - this is called Scoped Outside the function

var width =5;


//Create a function that calculates the perimeter of a rectangle

function calcPerimeter(){

      //Create another variable called width
      //Scoped to the function calPerimeter
      var width =10;

      console.log ("Inside of function "+width);

      var height = 20;
      var perimeter= width *2 + height*2
      console.log("Inside of function, the perimeter is "+perimeter);


}





console.log("Before call "+width);

//Function call
calcPerimeter();

console.log("After Call "+width);


//Can not access variables created inside of function
//console.log(height);