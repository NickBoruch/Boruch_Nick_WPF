
 /*
Nick Boruch
WPF 1407
7/23/14
Functions Worksheet
 */

//alert("Testing 1,2,3");

//How many times would it take a bee to kill my 54lb dog

function weight(w){
     var stings =  8.666666667.toFixed(1) *w;
     return stings;

 }
 var timesStung = prompt("How many pounds is your dog?\nPlease enter a number only");
 var death = weight(timesStung);
 console.log( "after "+ death+  " stings your dog will die!");







