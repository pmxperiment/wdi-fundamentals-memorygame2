//console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

//8.1 Create an array cards, four strings should be "queen", "queen", "king", and 
var cards = ['Queen', 'Queen', 'King', 'King'];
//8.1 Create an array cardsInPlay. Set value to an empty 
var cardsInPlay = [];
//8.2 Create a variable cardOne, store first item in the "cards" array in variable
var cardOne = cards[0];
//8.2 add this first card to the cardsInPlay array
cardsInPlay.push(cardOne);
//8.3 console.log() to display the card user flipped, message displayed "User flipped queen".
console.log("User flipped " + cardOne);


//8.3 Create a variable cardTwo. Store third item of cards array in variable cardTwo.
var cardTwo = cards[2];
//8.3 add this second card to the cardsInPlay array
//8.3 Use the push() method to add cardTwo to end of the cardsInPlay
cardsInPlay.push(cardTwo);
//8.4 displayed in the console should say "User flipped king".
console.log("User flipped " + cardTwo);

//8.4 Write if statement checks to see if length of cardsInPlay array is 2.
//8.5 check to see if the first card in the cardsInPlay array (cardsInPlay[0]) 
//8.5 is equal to the second card in the cardsInPlay array
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}else{
alert("Sorry, try again.");
}


 


