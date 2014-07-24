
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


//Create a function for calculating the area of a circle

function circleArea(r){

//Calc Area
    var area = 2*r* Math.PI

    //Return the area
    return area;

}



 //Ask the user for a radius
 var radius1 = prompt("Let's calc the area of a circle!\nType in a radius:");

 //Function call
var firstArea = circleArea(radius1);
 console.log("The area of a circle with a radius of "+radius1+" is "+firstArea.toFixed(2));


 //Prompt the user for another circle
 var radius2 =prompt("Please enter another radius:");

 //Function call
 var secondArea= circleArea(radius2);

 //Console.log the results
 console.log("The area of a circle with a radius of "+radius2+" is "+secondArea.toFixed(2));

 //Pizza how much is it per sq in

 // area of pizza divided by cost


 var pizzaRadius = prompt("What is the radius of your pizza?");

 var pizzaCost = prompt("How much was your pizza?");

 //Use our existing function to find the area of our pizza
 var pizzaArea = circleArea(pizzaRadius);

 //Variable for cost of pizza per sq inch
 var pizzaperInch = pizzaArea / pizzaCost

 //console.log
 console.log ("Your pizza is $"+pizzaperInch.toFixed(2)+" per sq inch");




