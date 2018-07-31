import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;

  @Input() errorMessage: String;  // lembrando que "input" significa que o atributo pode ser informado de fora do componente no html
  @Input() label: String;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model; // o atributo input do componente receve o ngmodel que foi passado no compontente pai
    if(this.input == undefined) {
      throw new Error('Este componente tem que ser usado com um NgModel');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
