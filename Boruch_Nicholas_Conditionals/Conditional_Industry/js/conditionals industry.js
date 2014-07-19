
 /*
Nick Boruch
WPF 1407
7/18/14
Conditional Industry Part 2
 */

//alert("Testing 1,2,3");

// Find out if the person is paying credit or debit

var credit= "Yes"


var debit = prompt("Do you have debit or credit card? ");

if (debit === "Yes" || debit === "yes"){

console.log ("Then you recieve a 10 percent discount of total cost. ")

}else if(debit === "debit" || debit === "Debit"){
    console.log("Then you get a 10% discount!");

} else if (debit ==="debit" && credit != "yes"){
    console.log("Your monkey is curious...his name is George")
} else if(debit ==="Discount" && credit === "yes"){

    var creditCard= prompt("how do you plan to pay?") ;
    console.log ("you would get a discount  "+debit+ " of 10 percent?");


}else {
    console.log(" Enjoy your purchase!")
}




