import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>() // acho que entendi:
  // isso aqui é um evento que é disparado da classe ts para que o html (a view) escute.
  // Neste caso quando o método setRate é chamado ele envia este evento que no order-summary.component.html (onde este componente aqui é usado)
  // que vai setar uma variável "rated" (que é de order-summary -- neste caso foi declarada e usada só no .html, mas poderia estar no .ts) como true.
  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRate: number;


  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }


  setTemporaryRate(r: number) {
    if(this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
