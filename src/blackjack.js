
//Function prototype for the Card object.
// function Card(rank, suit, numbervalue, imgfile) {
//   this.rank = rank;
//   this.suit = suit;
//   this.numbervalue = numbervalue;
//   this.imagefile = imgfile;
// };

//Function prototype for a hand.
// function Hand() {
//   this.cards = [];
//   this.total = 0;
//   this.CalculateTotal = function () {
//     this.total = 0;
//     for (var i = 0; i < this.cards.length; i++) {
//       this.total += this.cards[i].numbervalue;
//     }
//   };
// }

//Function prototype for the Deck object.
// function Deck() {
//   this.suit = ['club', 'diamond', 'heart', 'spade'];
//   this.rank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
//   this.cards = [];

//   for (var j = 0; j < 4; j++) {
//     var currentsuit = this.suit[j];

//     for (var i = 0; i <= 12; i++) {
//       //Calculate the number value of the card.
//       var numvalue = 0;

//       if (i == 0) {
//         numvalue = 11;
//       }
//       else if (i < 10) {
//         numvalue = i + 1;
//       }
//       else {
//         numvalue = 10;
//       }
//       //Add the card to the deck.
//       var imagename = "..\\CardImages\\" + this.rank[i] + currentsuit.substring(0, 1) + ".png";
//       this.cards.push(new Card(this.rank[i], currentsuit, numvalue, imagename));
//     }
//   }

//   this.NewCard = function (number) {
//     return this.cards[number];
//   };
// }

//This function gets a random number.
function GetRandomCardNumber() {
  var min = 1;
  var max = 51;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import {Deck} from './models/deck';
import {Card} from './models/card';
import {Hand} from './models/hand';

export class Blackjack {

  constructor() {
    this.deck = new Deck();
    this.pHand = new Hand();
    this.dHand = new Hand();
    this.message = "";

    this.ShowHit = false;
    this.ShowDeal = true;
    this.ShowStand = false;
    this.ShowNewGame = false;
  }
    //Event handler function for the Deal button.
    Deal = function () {

      //Get the player's cards and calculate the total.
      this.pHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));
      this.pHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));
      this.pHand.CalculateTotal();

      //Get the dealer's cards and calculate the total.
      this.dHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));
      this.dHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));
      this.dHand.CalculateTotal();

      //Hide the deal button amd show the hit and stand buttons.
      this.ShowDeal = false;
      this.ShowHit = true;
      this.ShowStand = true;

    }

    //Event handler function for the Hit button.
    Hit() {
      //Get the player's next card
      this.pHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));

      //Update the hand's total.
      this.pHand.CalculateTotal();

      //Evaluate the totals.
      this.Evaluate(false);
    }

    //Event handler for the stand button.
    Stand() {
      while (this.dHand.total <= 16) {
        //Deal the dealer a new card.
        this.dHand.cards.push(this.deck.NewCard(GetRandomCardNumber()));

        //Update the hand's total.
        this.dHand.CalculateTotal();
      }

      //Evaluate the game.
      this.Evaluate(true);
    }

    //Event handler for the new game button.
    NewGame() {
      //Clear message and hands.
      this.message = "";
      this.pHand = new Hand();
      this.dHand = new Hand();

      //Show and hide buttons.
      this.ShowDeal = true;
      this.ShowHit = false;
      this.ShowStand = false;
      this.ShowNewGame = false;
    }

    //Function to evaluate the outcome of the game.
    Evaluate(Final) {
      //First see if the player is over 21.
      if (!Final) {
        if (this.pHand.total > 21) {
          this.message = "The player is over 21 and loses.";

          //Hide the hit and stand buttons.
          this.ShowHit = false;
          this.ShowStand = false;
          this.ShowNewGame = true;
        }
      }
      else {
        if (this.dHand.total > 21) this.message = "The dealer is over 21 and loses.";
        else if (this.pHand.total > this.dHand.total) this.message = "The player wins.";
        else this.message = "The dealer wins.";

        //Hide the hit and stand buttons.
        this.ShowHit = false;
        this.ShowStand = false;
        this.ShowNewGame = true;
      }
    }

}
