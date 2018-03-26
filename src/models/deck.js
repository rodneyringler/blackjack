
import {Card} from './card';
import {Hand} from './hand';

export class Deck {

    constructor(){
        this.suit = ['club', 'diamond', 'heart', 'spade'];
        this.rank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
        this.cards = [];
    
        for (var j = 0; j < 4; j++) {

            var currentsuit = this.suit[j];
    
            for (var i = 0; i <= 12; i++) {
                //Calculate the number value of the card.
                var numvalue = 0;
        
                if (i == 0) {
                numvalue = 11;
                }
                else if (i < 10) {
                numvalue = i + 1;
                }
                else {
                numvalue = 10;
                }
                //Add the card to the deck.
                var imagename = "..\\CardImages\\" + this.rank[i] + currentsuit.substring(0, 1) + ".png";
                this.cards.push(new Card(this.rank[i], currentsuit, numvalue, imagename));
            }
        }
    }
  
    NewCard(number) {
      return this.cards[number];
    }
  }