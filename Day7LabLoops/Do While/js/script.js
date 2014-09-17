/*
Nicholas Boruch
09/17/14
Activity: Loops
*/

// Do While Loop

//Gas prices

var gasPrice = prompt("Enter a price you paid for gas");

do{
    alert("Your number "+gasPrice+ " will keep increasing over the years!");

    gasPrice++;
}while (gasPrice < 1000);


if(gasPrice != Number(gasPrice)){
    alert("You did not enter the price of gas!");
}
else{
    alert("Error.");
}

