
 /*
Nick Boruch
WPF 1407
7/25/14
Functions:Industry
 */

//alert("Testing 1,2,3");

//Making an Anonymous Function

//Solving how much tax should be added to the total charges for your work
//Setting the variables for the function to t=tax and l=labor
//This example is not east to understand I just was making a example just trying to use different type of math

var totalTax = function (t,l) {

    var tax = 10*t+l;
    return tax;

}

 var total = totalTax(21,10000);
 console.log (total);


 //Add an else if

if(total==totalTax){
   console.log("Then You are being overcharged!")
}else if(totalTax() !=total){
    console.log("You are being charged fairly.")
}else{
console.log("There is an error!")
}
