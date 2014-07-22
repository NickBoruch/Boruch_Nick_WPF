
 /*
Nick Boruch
WPF 1407
7/21/14
Validating Prompts
 */

//alert("Testing 1,2,3");


//Create variable for min #
var min = prompt("Please type in a min number:");

//Test the min variable to see if user left it blank
if(min==="" ){
   //User typed in nothing.
   //Re-prompt the user again
    console.log ("You did not enter anything!");
    min=prompt ("You must type in a number! Do not leave blank!");
}

 //Check the user types in a number
 // isNaN() - returns a boolean - Text -> true  Number->false

//console.log(isNaN(parseInt(min)));

if(isNaN(parseInt(min))){
    console.log ("We are in the if loop");
//Re-Prompt the user
    min = prompt("Please type in only a NUMBER:");
}


//Use loops for validating the max value

var max = prompt("Please type in a max value:");
 /*
 //While Loop check for user skipping the prompt

 while(max===""){
     max = prompt("Please don't leave this blank...It is important!");
 }
//This While loop check the user is typing in a number
while(isNaN(max)){
    //Re-Prompt the user and tell them not to use text only numbers
    max= prompt("Please use only numbers for the max Value.");
}

 */

 while(max==="" || isNaN(max)){

     max = prompt("Please do not leave blank or only type in numbers:");

 }



console.log(min);



 //Ask the user for yes or no
var result = prompt("Please type in only yes or no:");

while(result !="yes" && result!="no" && result!="Yes" && result!= "No" ){
    result = prompt("Please type in only yes or no:");

}



//Validate and ask with a do while

do{
   var whatever = prompt("Type in any number you want:");

}while(isNaN(whatever) || whatever==="");





console.log(result);