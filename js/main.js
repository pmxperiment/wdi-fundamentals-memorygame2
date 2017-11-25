//console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

//8.1 Create an array cards, four strings should be "queen", "queen", "king", and 
//8.1 Create an array cardsInPlay. Set value to an empty 
//8.2 Create a variable cardOne, store first item in the "cards" array in variable
//8.2 add this first card to the cardsInPlay array
//8.3 console.log() to display the card user flipped, message displayed "User flipped queen".
//10.1 Delete the four strings from the cards array
//10.1 In the cards array, create four objects, one for each card.
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
//9.5 Right below the cardsInPlay array & above the flipCard function, create a 
//9.5 function checkForMatch. Move the following lines of code into checkForMatch function.

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}else{
alert("Sorry, try again.");
}
};

//9.1 after lines with cards and cardsInPlay arrays, create a function flipCard.
//9.1 The function should accept one parameter: cardId. Move all the code 
//9.1 you wrote for last assignment, except for cards & cardsInPlay arrays in flipCard function.
//9.2 Delete the lines of code that you wrote in the last exercise
//9.3 in the flipCard function, add console.log() statement 
//9.3 to display the card that was flipped over..
//9.3 use the index number that is passed in when the flipCard 
//9.3 function is called to access this card from the cards array 
//9.3 like so: cards[cardId]
//9.3 console should read "User flipped queen" or "User flipped king".
//9.4 push method to add the card that the user flipped (cards[cardId]) to the cardsInPlay array.
//9.4 On the line after the flipCard function, call the flipCard function, passing in 0 as an argument.
//9.4 Now, on the next line, call the flipCard function again, passing in 2 as an argument
//9.6 ???call the checkForMatch function from inside 
//9.6 the flipCard function, where the lines above used to sit
//10.2 In the flipCard function, find this console.log 
//10.2 statement: console.log("User flipped " + cards[cardId]);
//10.3 Update the portion cards[cardId] to cards[cardId].rank
//10.4 update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);
//10.4 You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array
var flipCard = function(cardId) {
console.log("User Flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
//Add two console.log() statements. One should log the cardImage and the other should log the 
//10.4 suit for the flipped card.
console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);
checkForMatch();
};

flipCard(0);
flipCard(2);


