
 /*
Nick Boruch
9/22/14
Functions:Industry
 */

//alert("Testing 1,2,3");


 //declare a variable

 var totalTax = function (t,l) {

//set up the function

     var taxes = 10*t+l;

     //return the variable tax

     return taxes;

 }
 //declare a new variable

 var total = totalTax(21,10000);

 //console.log out the total

 console.log (total);


 //Add an else if

 //make an if statement

 if(total==totalTax){
     //console.log

     console.log("You are being overcharged!\n make sure to check out other websites before finalizing your purchase!");

     //add an else if

 }else if(totalTax() !=total){

     //console.log it out

     console.log("Based on other prices you are being charged fairly.");

     //add an else

 }else{
     //console.log

     console.log("There is an error!")
 }

