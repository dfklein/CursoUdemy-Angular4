import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8; // Em uma aplicação real você traria isto do back-end como um serviço.

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de débito', value: 'DEB'},
    {label: 'Cartão de refeição', value: 'REF'}
  ];
  constructor(private orderService : OrderService,
              private router : Router) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
                     .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluída: ${order}`);
    });
    this.orderService.clear();
  }
}
