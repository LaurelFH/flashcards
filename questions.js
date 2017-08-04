// requiring our basic card module exported from basiccard.js
var BasicMainCard = require("./basiccard.js");
// var safeBasicCard = require("./basiccard.js");
var BasicClozeCard = require("./clozecard.js");
//running hepburn npm package
// var hepburn = require('hepburn');


// creating and storing a new basic and cloze card objects
//BASIC VARIABLES 
var firstPres = new BasicMainCard("Who was the first president of the United States", "George Washington");
var taberu = new BasicMainCard("What is the meaning of the verb taberu?", "To eat");
var serestar = new BasicMainCard("What is the meaning of the verbs ser and estar?", "To be");

//CLOZE VARIABLES
var chushingura = new BasicClozeCard("Chikamatsu Monzaemon", "is the author of Goban Taiheiki", "Chikamatsu Monzaemon is the author of the Goban Taiheiki");
var fuenteovejuna = new BasicClozeCard("Lope de Vega", "is the author of Fuenteovejuna", "Lope de Vega is the author of Fuenteovejuna");
var cleanCode = new BasicClozeCard("Robert C. Martin", "is the author of Clean Code", "Robert C. Martin is the author of Clean Code");
var UNC = new BasicClozeCard("UNC", "is the oldest Public American-Chartered University in the US", "UNC is the oldest Public American-Chartered University in the US");


// // calling the two card methods on our sample [use a random quesiton?] object
// //has a front and back property
// .basicMainCard("",  "");
// //has
// .basicClozeCard("", "");

///////////TESTING INSTANCEOF 
// var sonic = new safeBasicCard("Sonic the Hedgehog", "is the former mascot of SEGA", "Sonic the Hedgehog is the former mascot of SEGA");
// sonic instanceof safeBasicCard; 
// sonic.prototype instanceof safeBasicCard;
//if(sonic.prototype instanceof safeBasicCard == true){
	// console.log(sonic.prototype);	
// } else{
//console.log("there was an error with the instance of test");
//}



///////////////////////SAMPLE TEST QUESTIONS 
//who was the first pres of the US?
console.log(firstPres.front);
//Should be G Washington as the name 
console.log(firstPres.back);
console.log(taberu.front);
console.log(taberu.back);
console.log(serestar.front);
console.log(serestar.back);
//////////////////////SAMPLE CLOZE QUESTIONS 
console.log(chushingura.clozePart);
console.log(chushingura.clozeAnswer);
// console.log(chushingura.fullText);
console.log(fuenteovejuna.clozePart);
console.log(fuenteovejuna.clozeAnswer);
console.log(cleanCode.clozePart);
console.log(cleanCode.clozeAnswer);
console.log(UNC.clozePart);
console.log(UNC.clozeAnswer);
/////////////////////RESOURCES
//potentially run japanese text through node:  https://www.npmjs.com/package/hepburn
//info on scope safe constructors in JS:  http://mikepackdev.com/blog_posts/9-new-scope-safe-constructors-in-oo-javascript
//same from MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
//More on scope-safe: https://javascript.info/instanceof
//http://skilldrick.co.uk/2011/09/understanding-typeof-instanceof-and-constructor-in-javascript/
//https://stackoverflow.com/questions/8093057/javascript-inheritance-and-the-constructor-property?rq=1