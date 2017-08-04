
function BasicClozeCard (clozeAnswer, clozePart, fullText){
	if(!(this instanceof BasicClozeCard))
		return new BasicClozeCard (clozeAnswer, clozePart, fullText);
	this.clozeAnswer = clozeAnswer;
	// this.clozePart = clozePart;
	this.fullText = fullText;
	//try and research more about replace method (replaces param1 with param2-- both are strings)
	this.clozePart = this.fullText.replace(clozeAnswer, "...");

};
	
// o	The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// o	The constructed object should have a partial property that contains only the partial text.
// o	The constructed object should have a fullText property that contains only the full text.



//This file should define a Node module that exports a constructor for creating cloze-deleition flashcards
//move to the bottom? needs js?
module.exports = BasicClozeCard; 


