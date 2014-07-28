
 /*
Nick Boruch
WPF 1407
7/25/14
Functions:Personal
 */

//alert("Testing 1,2,3");

//Figuring out the total cost of a  Playstation 4 & Xbox One
//Set p for playstation and x for xbox

 //Normal Function
 function xboxorPlaystation (p,x) {

     //Calc the price!
     var  prices = p+x;

     //Return the Prices
     return prices;

 }

var total = (xboxorPlaystation(399,499));
 console.log (total);

 //Creating a Ternary
 //t=total

var t= 898;
 if(t>900){
   console.log("You are probably being overcharged!");
 }else{
     console.log("You are paying the right amount!");
 }


 var results = (t<900) ? " You are being overcharged." : "You are paying the right amount.";
 console.log (results);
