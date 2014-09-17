/*
 Nicholas Boruch
 09/15/14
 Conditionals: Wacky
 */

//Let's figure out if the random number you entered is greater than 21

//alert the user

alert("Please enter a random number and find out if it is greater than 21!");

//prompt the user
var randomNumber = prompt("Please enter a number:");

if(randomNumber > 21){

    alert("The number you entered "+Number(randomNumber)+" is greater then 21!");
}
if(randomNumber < 21){

    alert("The number you entered "+Number(randomNumber)+" is not greater then 21!");
}
else{
// console.log the number
    console.log(randomNumber);
}