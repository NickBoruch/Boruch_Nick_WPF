
 /*
Nick Boruch
WPF 1407
7/14/14
Casting
 */

//alert("Testing 1,2,3");

//Casting a variable means treating one variable data type like another
/*
 var stringVar = "6";

var result = 7+stringVar;


 */



//Number() - treats what is inside like a number
console.log (result);

var stringVar = "6";

 var result = 7+Number (stringVar);


 console.log (result);

 //User Prompt
 var userInput= prompt(" How old are you");

 //how old will the user be in ten years?
 var futureAge= Number(userInput) + 10;
 console.log(futureAge);

 //As for year
 var yearBorn = prompt("Type in the year you were born:");
 var age = 2014 - Number (yearBorn);

 console.log (age);


// Cast a number as a string
var areaCode = 407;
var firstPart = 111;
var secondPart = 2222;

//var phoneNumber = areaCode+firstPart+secondPart;
//String () - anything inside is treated like text
var phoneNumber = String (areaCode)+String(firstPart)+String(secondPart);
console.log (phoneNumber);



// Parsing An Integer

//parseInt() - looks through a text string and returns an integer
//ONLY works if the text string starts with that number - spaces don't count
// If the first character is not a number then it returns NaN - not a number
//ONLY returns the first number it finds!

var a = parseInt("40 years");
console.log (a);

var b = parseInt(" I am 40 years old");
console.log(b)