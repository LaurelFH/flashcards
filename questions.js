// requiring our basic card module exported from basiccard.js
var BasicMainCard = require("./basiccard.js");
var BasicClozeCard = require("./clozecard.js");

// creating and storing a new basic and cloze card objects
var firstPres = new BasicMainCard("Who was the first president of the United States", "George Washington");
var taberu = new BasicMainCard("What is the meaning of the verb taberu?", "To eat");


var chushingura = new BasicClozeCard("Chikamatsu Monzaemon", "...is the author of Goban Taiheiki", "Chikamatsu Monzaemon is the author of the Goban Takheiki");

// // calling the two card methods on our sample [use a random quesiton?] object
// //has a front and back property
// .basicMainCard("",  "");
// //has
// .basicClozeCard("", "");

///////////////////////SAMPLE TEST QUESTIONS 
//who was the first pres of the US?
console.log(firstPres.front);
//Should be G Washington as the name 
console.log(firstPres.back);
console.log(taberu.front);
console.log(taberu.back);
//////////////////////SAMPLE CLOZE QUESTIONS 
console.log(chushingura.clozePart);
console.log(chushingura.clozeRemove);

// console.log(chushingura.fullText);


/////////////////////RESOURCES
//potentially run japanese text through node:  https://www.npmjs.com/package/hepburn
