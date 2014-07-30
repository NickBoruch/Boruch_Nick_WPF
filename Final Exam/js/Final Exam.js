
 /*
Nick Boruch
WPF 1407
7/30/14
Final Exam WPF
 */

//alert("Testing 1,2,3");

//Prompt the user for the cost of their shoes.

var shoePrice=prompt("Please enter the amount you spent on your shoes!");

//Test to make sure they enter a number

if (shoePrice===""){
    shoePrice=prompt ("You must type in a number!");
}

//Check to make sure the user enters a real number

 if(isNaN(parseInt(shoePrice))) {
     console.log("We have not gotten a price yet");
     shoePrice = prompt("Please type a number only!");
 }

//Ask for a discount

 var discount = prompt("Please type how much of a discount you recieved!");

 while(discount==="" || isNaN(discount)){

     discount= prompt("Please enter a number!");

 }

 console.log(shoePrice);

 //create a function to figure out the price
 //set d for discount and p for price

 function pricewithDiscount(d,p) {

     var shoePrice = 150;
     var discount = 10;
     var total = shoePrice*(discount);


     console.log (total);
 }

 pricewithDiscount();