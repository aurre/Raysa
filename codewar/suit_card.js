function defineSuit(card) {
  var suit = {
    "♣": "club",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  }
  return suit[card.charAt(card.length - 1)];
};

console.log(defineSuit('3♣'));

