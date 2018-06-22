import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { // private ou public no argumento do construtor significa que além de receber o argumento você o está declarando para esta classe e injetando como uma dependência, não sendo necessário instanciá-lo.

  }

  ngOnInit() { // este método é chamado uma vez quando o componente é renderizado em tela, sendo ideal para inicializações de variáveis.
    this.restaurantsService.restaurants()
      .subscribe(rests => this.restaurants = rests);

  }

}
