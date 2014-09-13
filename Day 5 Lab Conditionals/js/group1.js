
 /*
Nick Boruch
9/12/14
Conditionals Worksheet
 */

 //Group 1 Celsius to Farenheight





 var temperature = prompt("Please enter your temperature.");


 var converter = prompt("Converting to Celsius or Fahrenheit?\n" +
     " C = Celsius | F = Fahrenheit");


 if(converter == "C"){

     var celsius = (Number(temperature) - 32) * 5 / 9;

     alert(+temperature+ " degrees Fahrenheit is "+celsius+ " degrees Celsius.");
     console.log(+temperature+ " degrees Fahrenheit is "+celsius+ " degrees Celsius.");
 }else{
 }


 if(converter == "F") {

     var farenheight = Number(temperature) * 9 / 5 + 32;

     alert(+temperature+ " degrees Celsius is "+farenheight + " degrees Fahrenheit.");
     console.log(+temperature+ " degrees Celsius is "+farenheight + " degrees Fahrenheit.");
 }else{
 }