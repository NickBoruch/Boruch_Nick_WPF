
 /*
Nick Boruch
WPF 1407
7/28/14
Examples
 */

//alert("Testing 1,2,3");


//Create a function that will spit out a random dice roll

function randomDie(){

    //Calculate a random integer from 1-6.

    var die= Math.round( Math.random (6)*(1) + 1);

    //return the die #
    return die;

}

//Create a function that will check to see if the dice are the same

 function diceCheck(d1,d2,d3,d4,d5){

     //Check dice against each other

     if(d1===d2 && d2===d3 && d3===d4 && d4===d5){

         //All dice are equal and the player wins the game
         var results = "won";
          return results;

     }else{
         //Create code runs when the dice are different

         var results = "lose";
         return results;

     }


 }


//In order to count how many times we loop - we create the counter variable

 var counter = 0;


//Create a loop for as long as the user has not won.

do {

//Let's get 3 dice
    var die1 = randomDie();
    var die2 = randomDie();
    var die3 = randomDie();
    var die4 = randomDie();
    var die5 = randomDie();

//Check to see if the dice are the same
     var diceResults = diceCheck(die1, die2, die3, die4,die5);
     console.log(diceResults);

    counter++;

}while(diceResults != "won");

 console.log ("It took "+counter+" number of times in order for the dice to match.");

