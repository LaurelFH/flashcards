
//main constructor;  needs to accept two arguments 
	function BasicMainCard(front, back){
		//contrusted object with front prpoerty with text on the front of the card
		this.front = front;
		//constrcuted object with back proeprty that contians text on back of the cards 
		this.back = back;
		// this.display = function(){

		// 	console.log(this.)
		// }
	};


	// function safeBasicCard(front, back){
	// 	this.front = front;
	// 	this.back = back;

	// };

//This file should define a Node module that exports a constructor for creating basic flashcards

module.exports = BasicMainCard; 
// module.exports = safeBasicCard;
