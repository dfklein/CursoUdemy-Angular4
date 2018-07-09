import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from "./menu-item.model"

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem; // lembrando que o @Input é usado quando uma propriedade será passada pelo component parent (o html)
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
