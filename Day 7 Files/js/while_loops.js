
 /*
Nick Boruch
WPF 1407
7/21/14
While Loop
 */

//alert("Testing 1,2,3");

// The while loop loops through a block of code as long as a specific condition is true

//Initialize a counter variable
var counter = 0;

// Setup the while loop and the condition to test
while(counter<200){
   console.log("Somethings just never end..."+counter);

    //Change our counter variable
    //If we don't, we could get an infinite loop
    counter++;

}

 console.log("Ending counter "+counter);


 //Do While loop
 //The Do While loop is extremely similar to the basic while loop.
 //Main difference is that the code will run once and THEN check the condition.

 //Setup counter variable
 var i = 10;

//Setup Do While Loop
do{
   console.log("The number is "+i);

    //Change the counter variable
    i++;

} while(i<10);

