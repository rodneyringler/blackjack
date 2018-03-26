import {Card} from './card';

export class Hand{

  constructor(){
    this.cards = [];
    this.total = 0;
  }
    
  CalculateTotal() {
    this.total = 0;
    for (var i = 0; i < this.cards.length; i++) {
      this.total += this.cards[i].numbervalue;
    }
  }
}