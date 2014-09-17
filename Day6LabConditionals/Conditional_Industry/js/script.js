/*
 Nicholas Boruch
 09/15/14
 Conditionals: Industry
 */

// Ask the user if they want to buy Dreamweaver or Web Storm

// Find out if the person is paying cash or debit

// If the person is paying with credit, and they chose Dreamweaver, they'll get a 15% discount

// Alert the user
alert("Let's purchase Dreamweaver or Webstorm");

// prompt the user if they want Dreamweaver or Webstorm

var item = prompt("Do you want to purchase Dreamweaver or Webstorm?");

if(item === "dreamweaver"){

    var dreamWeaver = prompt("You chose to purchase DreamWeaver! Are you sure!");
}
if(dreamWeaver === "yes"){

    var payment = prompt("Would you like to pay with debit or credit?");
}
if(dreamWeaver === "no"){

    alert("Sorry you didn't chose dreamweaver.")
}
if(payment === "debit" && dreamWeaver === "yes"){

    alert("Awesome thanks for chosing dreamweaver !");
}
if(payment === "credit" && dreamWeaver === "yes"){

    alert("Awesome, since you're paying with credit you'll receive a one time off discount of 15% !.");
}
if(item === "Webstorm"){

    var webStorm = prompt("You chose Webstorm! Is this your final choice?");
}
if(webStorm === "yes"){

    var payment2 = prompt("Would you like to pay with credit or debit?");
}
if(webStorm === "no"){

    alert("Were sorry you didn't decide to chose webstorm.")
}
if(payment2 === "debit" && webStorm === "yes"){

    alert("Thanks for your purchase your debit card information will be safe");
}
if(payment2 === "credit" && webStorm === "yes"){

    alert("Thanks for your purchase your credit card went through succesfully");
}
else if(payment === String(payment)){

    alert("You didn't enter credit or debit.");
}
else if(payment2 === String(payment2)){

    alert("You didn't enter credit or debit.");
}
else if(item === String(item)){

    alert("You didn't select DreamWeaver or Webstorm!");
}
else{

    alert("ERROR");
}