
 /*
Nick Boruch
WPF 1407
7/23/14
Arguments
 */

//alert("Testing 1,2,3");

//Arguments - > In Function Call -> Goes into the function
//Parameters -> in function definition -> Catch the incoming arguments

// Function to calculate the area of a rectangle

//w,h are parameters - Same as declaring variables
//These variables are scoped to the function calcArea
function calcArea(w, h){

    //Create variables for width, height & area

    //HARDCODED VALUES----No BUENO!
    //var width = 20;
    //var height= 10;
    //var area = width * height

    //Create the variable, but using the parameters
    var area =w*h;

    //You have twp of the same rectangles, whats the area of both
    var areaBoth=area *2;


    //Console.log out the area
    console.log (area);
    console.log (areaBoth+ " area of two rectangles");
}

//Call the function
//calcArea();


//Create function call with Arguments
calcArea(20,10);

 calcArea (5,6);

//Let's add in arguments and parameters
//This will make the function more flexible



//Create a function that will convert human years to dog years

function dogYears(humanYears){

    //Input a human year...spit out a dog year
    //dogYears = humanYears * 7

    //Create a variable for dogYears
    var dogAge = humanYears *7;
    console.log("Dog age is "+dogAge);


}

 //function call
 dogYears(5);

//Add user input
var userInput = prompt("Let's convert your dogs human years to dog years\nType in your dogs age in human years");

//Throw the userInput into the function
dogYears(userInput);