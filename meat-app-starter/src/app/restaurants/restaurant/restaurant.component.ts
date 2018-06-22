import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant // você usa o decorator input sempre que você tiver uma propriedade que será passada por outro componente. Você verá este aqui sendo passado na tag <mt-restaurant> em restaurants.component.html

  constructor() { }

  ngOnInit() {
  }

}
