
 /*
Nicholas Boruch
9/19/14
Functions Worksheet
 */



//How many times would it take a bee to kill a dog

 //Create a function to find out how many times a bee could sting your dog before it would die

function weight(w){
     var stings =  8.666666667.toFixed(1) *w;
     return stings;

 }
 var timesStung = prompt("How many pounds is your dog?\nPlease only enter a number!!");
 var deceased = weight(timesStung);
 console.log( "after "+ deceased.toFixed(0)+  " stings your dog will die!");

 // Calculate the Circumference of a circle

 //create a function that finds the circumference of a circle

 function circleCircumference(d){
         var circumference=Math.PI*d;
     return circumference;

 }
var circle = prompt(" type in a diameter! \n Remember to only enter a number!");
var diameter =circleCircumference(circle);
 console.log ("The diameter is "+circle+" and the Circumference is " +diameter.toFixed(2));





