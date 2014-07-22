
 /*
Nick Boruch
WPF 1407
7/21/14
Loops Worksheet
 */

//alert("Testing 1,2,3");

//While Loop

//My Counter variable =music

var music = 1;

while (music<500){

  console.log ("Music Never Sleeps! It is what makes us dance! "+music);
    music++
}
console.log("Never give up on your dreams! \nYou can accomplish anything you set your mind too!"+music);

// Do While Loop

// My counter variable is i=200

var i = 200

 do{
     console.log("You spend "+i+ " Dollars on music");
     i++

 }while (i<200);

 //For Loops

 for(var i=200; i<2000; i++){
     console.log("I Spent "+i+" dollars on Gas over the past year.");

 }

//Validating Prompts Using While Loops

//var = artists

var artists = prompt("Please type in the name of a musician.");

 if(artists===""){

console.log ("You did not enter anything!!")
     artists=prompt("You must name a musician! Please do not leave this blank!!");
 }
 if(isNaN(parseInt(artists))){
     console.log ("Please name an artist");

     artists= prompt("Please type in the name of a musician only!");
 }

 var musician = prompt("Please type in your favorite musician!");

 while(musician==="" || isNaN(musician)){

    musician = prompt("Please do not leave this blank.");
 }
 console.log (artists);
