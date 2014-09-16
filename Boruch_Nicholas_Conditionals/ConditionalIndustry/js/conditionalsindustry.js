
 /*
Nick Boruch
9/15/14
Conditionals Industry
 */



// Find out if the person is paying credit or debit

var credit= "Yes";


var debit = prompt("Do you have debit or credit card? ");

if (debit === "Yes" || debit === "yes"){

console.log ("Then you recieve a 10 percent discount of total cost. ")

}else if(debit === "debit" || debit === "Debit"){
    console.log("Then you get a 10% discount!");

} else if (debit ==="debit" && credit != "yes"){
    console.log("Thanks");
} else if(debit ==="Discount" && credit === "yes"){

    var payment = prompt("how do you plan to pay?");


}
if(payment = "debit"){
    console.log ("you would get a discount  "+debit+ " of 10 percent.");
}
else {
    console.log(" Enjoy your purchase!");
    console.log(payment);
}




