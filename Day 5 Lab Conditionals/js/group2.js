
 /*
Nick Boruch
9/12/14
Conditionals Worksheet
 */



//Group 2 Check the Login

var login = prompt("Please enter your username");
 if(login === "NickBoruch"){
     var password = prompt("Please enter your password!");
     if(password==="Oakley1992"){
         alert("Welcome Back!");
         console.log ("Hello,"+login)
     }else{
         console.log("Password does not match our records");
     }
 }else{
     console.log("Username not found try again please.");
 }
