/*
Nicholas Boruch
09/15/14
Conditionals: Personal
*/

// Figure out if you can play a titan or a hunter

//Alert

alert("Let's figure out if you can play as a titan or a hunter");

var titan = prompt("Did you download the bonus maps?");

if(titan === "yes"){

    var destiny = prompt("Did you pre order the collectors edition?");
}
if(destiny === "yes"){

    var collectorsEdition = prompt("Whats your average Kill death ratio normally in any shooting game?");
}
if(collectorsEdition >= 1.2){

    alert("You can play as a hunter!");
}
else if(collectorsEdition <= 1.2){

    alert("Your kill to death ration is too low to be a hunter !");
}
else{

    alert("You can play as a Titan!");
}