 /*
Nick Boruch
WPF 1407
7/21/14
Looping Arrays
 */

//alert("Testing 1,2,3");

 var names =["Scooby", "Shaggy", "Fred", "Velma","Daphne", "Scrappy"];

 //Cycle through each of them and tell them that they solved the case
 //Find the length of the array

 console.log(names.length);

 for(var i =0; i<names.length;i++){

    console.log ("You solved the case "+ names[i]);

 }



 //Array of bills and we are going to add them up
 var bills = [50,10,5,20,10];

 var total = 0;

for(var j=0; j<bills.length;j++){

       // total = total + bills[j]; //total += bills[j];

    // I am only concerned with bills that are more than $15
    if(bills[j]>15){
       total+= bills[j];
    }


}

 console.log (total);
