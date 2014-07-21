
 /*
Nick Boruch
WPF 1407
7/21/14
Beer
 */

//alert("Testing 1,2,3");

//99 bottles of beer on the wall


//console.log ("99 bottles of beer on the wall.\n99 bottles of beer. You take one down, you pass it around. \n98 bottles of beer on the wall.");
//console.log ("98 bottles of beer on the wall.\n99 bottles of beer. You take one down, you pass it around. \n97 bottles of beer on the wall.");

 for(var i=99; i>0; i--){
//console.log (i);
console.log(i+" bottles of beer on the wall.");



 if(i===1){
     console.log (i+" bottles of beer. You take one down, you pass it around.");
     console.log( " No more bottles of beer on the wall.");

 }else{
     console.log (i+" bottles of beer. You take one down, you pass it around.");
     console.log(i-1 + " bottles of beer on the wall.");

 }

 }