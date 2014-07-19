
 /*
Nick Boruch
WPF 1407
7/18/14
Math
 */

//alert("Testing 1,2,3");

//round()
//Normal rounding.  .5 and up goes up...... .499999 goes down.
var num1= 9.544;
console.log(num1);
console.log(Math.round(num1));


//floor()
//Everything goes down
var num2 = 6.9;
console.log(num2);
console.log(Math.floor(num2));

//ceil()
//Everything always goes up!
var num3 = 4.000006;
console.log(num3);
console.log(Math.ceil(num3));


// Random Numbers
//random()- this returns a number between 0 and almost 1.
// NOTHING goes in the parenthesis
var num4 = Math.random();
console.log (num4);


//Numbers between 0 -> 10

var num5 = Math.random()*10 ;
console.log (num5)


//Integer between 0->100
var num6 = Math.round(Math.random()*100) ;
console.log (num6)


//A random number between 2 values

//Math.random() * (max-min) + min;

//numbers between 50->80
var num7 = Math.round(Math.random() * (80-50) +50);
console.log (num7);


//Math Object Constants
 //Constants are ALWAYS UPPERCASE!
  //Math.PI

//Circumference of a circle
// 2 * PI * R

var radius = prompt(" Please type in a radius:");

//To get a specific decimal place use toFixed(x)

var circCircle = 2* Math.PI *radius ;
console.log ("Circumference of a Circle is "+circCircle.toFixed(2));
