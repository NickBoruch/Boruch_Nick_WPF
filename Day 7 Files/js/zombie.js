
 /*
Nick Boruch
WPF 1407
7/21/14
Zombie Outbreak
 */

//alert("Testing 1,2,3");

//We have a zombie here at Full Sail.
 //It can bite 4 people a day and turn them into zombies the following day.

//The CDC wants to know how many zombies there will be in 8 days.

//Givens
var numZombies = 1; //How many zombies do we have
var numBites= 4; //Number of bites per zombie per day
var days = 8; //Number of days the CDC wants to know

for(var i = 1; i<=days; i++){

  //How many new zombies get made  each day
  var newZombies = numZombies * numBites;

 //How many zombies do we have
 numZombies = numZombies + newZombies; //numZombies += newZombies;

 //Console.log
 console.log("At the end of day #"+i+" there are "+numZombies+" zombies!");

}

