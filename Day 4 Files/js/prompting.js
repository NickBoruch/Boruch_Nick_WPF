
 /*
Nick Boruch
WPF 1407
7/14/14
Prompting The User
 */

//alert("Testing 1,2,3");

//Ask user for input
//prompt();


//Prompts ALWAYS RETURN text strings!!!

 //Prompts the user...but we are not capturing the data
 //prompt("Enter your year of birth");

 //Correct WAY!!
 var userInput = prompt("Enter your birth year:");
 console.log(userInput);

 //Calculate how old the user is
 var age = 2014 - userInput;
 console.log("you are "+age+" years old.");

 //Calculate the area of rectangle

 //height and width are needed from user!
 //Explain to the user what we are doing

var height = prompt("Let's figure out the area of a rectangle!\nWhat is the height:");
var width = prompt("What is the width:");


//Calculate the area - store in a variable
var areaRect = height * width ;

 console.log("The area of your rectangle is "+areaRect);

