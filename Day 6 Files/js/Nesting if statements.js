
 /*
Nick Boruch
WPF 1407
7/18/14
Nesting if Statements
 */

//alert("Testing 1,2,3");

//Some decisions affect other decisions

//If it is warm, lets go to the beach, if not then lets go to the movies

// Variable for temperature

var temp =80;

if(temp>=85){
   console.log ("Let's go to the beach!")
} else{
    console.log ("Let's go to the movies!")
}


//If the water is warm, then go swimming, if not then let's get a tan

var waterTemp = 78;

if(waterTemp>=75){
   console.log ("Let's go swimming!");
} else {
    console.log("Let's get a tan!");
}
