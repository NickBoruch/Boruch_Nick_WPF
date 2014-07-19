
 /*
Nick Boruch
WPF 1407
7/18/14
Conditionals Personal
 */

//alert("Testing 1,2,3");

//Personal Conditional-Sub project#1
//Music = 5.99 if that is less than 10.00 you spent less money on music
// if 10.00 is greater than what you spent then you spent more money on music than expected

var music = 5.99
if (music<10.00){
console.log ("You Spent less money on music.")
}else{
 console.log ("You spent more than 5.99 on music.")
}
 var results = (music<10.00) ? " You spent $10.00 or more on music." : "You spent less than $10.00.";
 console.log (results);
