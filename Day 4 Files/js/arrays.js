/*
Nick Boruch
WPF 1407
7/14/14
Arrays
 */

//alert("Testing 1,2,3");

//Create basic array
var avengersNames = ["Iron Man", "Hulk", "Thor", "Captain America"];

//Print out the array
console.log (avengersNames);

//Access a specific item in our array
console.log (avengersNames [0]);

//Set a specific item
avengersNames[0] = "Hawkeye";
console.log (avengersNames);

//Add an item AFTER the array is declared
avengersNames[4] = "Antman";

console.log(avengersNames);

//Gives how many  items are in the array
console.log(avengersNames.length);

//Last index # is one less than the length!!



//Picking Oranges
var orangeBins = [234, 567, 883];

//How many oranges did we pick in those 3 days?
var totalOranges = orangeBins[0] + orangeBins[1]+orangeBins[2];
console.log("The total number of oranges picked for the 3 days is "+totalOranges);


//average picked
var averageOranges = totalOranges/orangeBins.length ;

//Round a number to decimal places
// .toFixed(#)

console.log (" The average number of oranges picked in one day is "+averageOranges.toFixed(2)+".");


