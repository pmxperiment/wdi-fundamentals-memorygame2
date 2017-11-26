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
//previously deleted (cardsInPlay.length === 2), re-added now fixes alert timing issue
	if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}else{
alert("Sorry, try again.");
}
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
//11.6 Remove the cardId parameter from the flip card function.
var flipCard = function() {
//11.6 On the first line inside the flipCard function, use the getAttribute method 
//11.6 to get the data-id attribute of the card that was just clicked and store it 
//11.6 in a variable cardId. EXAMPLE: this.getAttribute('attribute-we-want-to-get-goes-here');
//var or not below? ... not var
var cardId = this.getAttribute('data-id');
console.log("User Flipped " + cards[cardId].rank);
//11.7 use the setAttribute method to update the src attribute to the image of the 
//11.7 card that was just clicked, which is stored in the cardImage property in 
//11.7that card's object in the cards array. example: cardElement.setAttribute('src', 'images/back.png');
this.src = cards[cardId].cardImage;
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
//Add two console.log() statements. One should log the cardImage and the other should log the 
//10.4 suit for the flipped card.
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};


//11.2 after the flipCard function, write a new function called createBoard; with
//11.2 no parameters.this function will create a new game board. 
//11.2 Now add each card to the board. Within the createBoard function, 
//11.2 use a for loop to loop through the cards array.
var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
//11.3 use createElement method to create an img element & store it in a variable cardElement.
var cardElement = document.createElement('img');
//11.3 use the setAttribute() method to add a src attribute for the cardElement. 
//11.3 The src should be "images/back.png"
//11.3 HINT/Example cardElement.setAttribute('attributeName', 'attributeValue');
cardElement.setAttribute('src', 'images/back.png');
//11.3 use the setAttribute() method once again to set the card's 'data-id' attribute 
//11.3 to be the index of the current element, ?????? i ????? (no quotes).
cardElement.setAttribute('data-id', i);
//11.4 When each card is created (still within the for loop), we'll want to
//11.4 use the addEventListener() method to add a click event to the cardElement
//11.4 The function that we want to run when a user clicks on a card is the flipCard function.
cardElement.addEventListener('click', flipCard);
//11.4 use the appendChild() method to append the current cardElement to the 
//11.4 (EXAMPLE   document.getElementsByTagName('body')[0].appendChild(boxElement);)
//11.4 game board (it's an id) (which has an id of game-board).
document.getElementById('game-board').appendChild(cardElement);
}
};

//11.5 At the end of your JavaScript file, invoke the createBoard function.
createBoard();
