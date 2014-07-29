
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

 //Create a function that will calculate how many shots it will take to get a headshot with a rifle.

 function shotsTaken(){

     //Calculate a random integer from 1-5

     var death= Math.round( Math.random (1)*(5) + 1);

     //return the # of deaths
     return death;

 }

 //Create a function that checks how many different type of bullets were shot

 function bulletsUsed(b1,b2,b3,b4,b5,b6){

     //Check bullets=b used

     if(b1===b2 && b2===b3 && b3===b4 && b4===b5 && b5===b6){


         var resultsofBullets = "6";
         return resultsofBullets;

     }else{
         //Create code runs when the number of bullets used are different

         var resultsofBullets = "more than 6";
         return resultsofBullets;

     }


 }


 //create the counter variable

 var ammo = 0;




 do {


     var bulletType1 = shotsTaken();
     var bulletType2 = shotsTaken();
     var bulletType3 = shotsTaken();
     var bulletType4 = shotsTaken();
     var bulletType5 = shotsTaken();
     var bulletType6= shotsTaken();

//Check to see if the bullets are different
     var bulletResults = bulletsUsed(bulletType1, bulletType2, bulletType3, bulletType4,bulletType5,bulletType6);
     console.log(bulletResults);

     ammo++;

 }while(bulletResults != 6);

 console.log ("There were "+ammo+" number of bullets used.");

