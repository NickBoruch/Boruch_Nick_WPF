/*
Nick Boruch
WPF 1407
7-11-2014
Day 3 First File
 */

/*
This is an example of a multi-lined comment
Anything in-between the star and slash will not be effected.
 */

// Single Line Comment

// Example Comment goes here

// alert () - creates a pop up box that the user can see
alert("love this class");

// Console.log() - coders to help troubleshoot code
console.log("This is a Console statement");


// Declare a variable
// Use the keyword var
var whatever1;  //Declaration of a variable
whatever1 = 42;  //Definition of a variable - giving value

// storageContainer = Value; - define a variable

//Setup and define the variable in one step
var a = 2;  // Declaring and Defining in one step

//Check the value of the a variable
console.log(a);

//How do we add in JS? +

//THIS IS NOT CORRECT!!!
a+3; // temporary doesnt track it
a= a+3;
console.log(a);

console.log(a+3);

//a=3;

console.log(a);


//Declare a new variable
var b;

//Define b, using variable a

b= a+3;

console.log(b);
console.log(a);

//Simple Math
//Find your age

//Create/declare a variable for year born
var yearBorn = 1992;

//age current year subtract year born
//Create age variable

var age = 2014-yearBorn;

console.log(age);


//Talk about math
//Basin Math Operators
// +, -, * , /

//Find the area of a triangle
// base * height / 2

//Create 2 variable one for base and one for height
var base = 4;
var height = 5;

//Create a variable for area of triangle
var areaOfTriangle = base * height / 2;
console.log(areaOfTriangle);

//Modulo - %
//Gives you the remainder

//var remainder = 32/10;
var remainder =32%10;
console.log(remainder);


//Find if odd or even
var evenOrOdd= 67%2;
console.log (evenOrOdd);

//Assignment Operators

/*
=Assignment - "is"

++ - add one to variable
a = a+1
a++;

-- subtracting one
a-- is the same as a = a-1;

+= adds the number after the equals to the variable
a +=6 is the same as a = a+6;

-= subtracts the number
a -=4; same as a = a-4;

*= multiply by
a *=3; a = a*3;

/= divide by
a/=4;   a = a/4;

*/


//String - TEXT!
// " is used to find the begining and end of a string"
// Needs to distinguish between variable names and just text

var kermit = "Light green";
var frogName = "kermit";

//Double or single??  MUST MATCH!!!!
//Escape character \ backslash in front of the escaped character

// Can also do a new line inside of a text string - \n - new line character

var phrase = 'I don\'t know.\nDo you?';


console.log(phrase);


//Boolean - useful for conditionals
//Either true or false ONLY!!
//Light switches
var question = true;

// NOT THE SAME AS THIS!
var nope = "true";

var unTrue = false;






