
 /*
Nick Boruch
WPF 1407
7/18/14
Conditional Review
 */

//alert("Testing 1,2,3");

// Basic Conditional

// test if a is less than 5

 var a =8;

if(a<5){
// if a is less than 5 this code will run
console.log ("a is less than 5");

}else{
// if a is GREATER than 5, this code will run
console.log("a is greater than 5");
}


//Test if an animal is a dog

//create a variable asking if the monkey has a name
var monkeyName = "yes";


 var animal = prompt("What type do you have?");

 if(animal === "dog" || animal === "Dog" ){

console.log("Your dog is named Rover...Bark!");

}else if(animal === "cat" || animal === "Cat"){
console.log("Your cat is named Whiskers!");

 } else if (animal ==="monkey" && monkeyName != "yes"){
 console.log("Your monkey is curious...his name is George")
 } else if(animal==="monkey" && monkeyName=== "yes"){
//Ask for monkey's name
var monkeyActualName= prompt("What is your monkey's name?") ;
  console.log ("Would your monkey named "+monkeyActualName+ " like a banana?");


 }else {
     console.log("Good luck with your weird animal!")
 }

 console.log (monkeyActualName);

