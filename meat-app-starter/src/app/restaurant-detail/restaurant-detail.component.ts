import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RestaurantsService} from '../restaurants/restaurants.service'
import {Restaurant} from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { // o ActivatedRoute é um objeto da api do angular que te permite ter acesso à URL da requisição.

  }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(rest => this.restaurant = rest);
  }

}
