import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from './radio-option.model';

/**
A interface ControlValueAccessor e todas as implementações que você vê aqui referem-se a tornar um componente
capaz de trabalhar com a diretiva ngModel (e consequentemente ser processada por um formulário estando dentro
de um componente customizado). Observar:
  1 - import de ControlValueAccessor, NG_VALUE_ACCESSOR e forwardRef
  2 - a declaração de providers na anotação @component
  3 - a implementação de métodos da interface ControlValueAccessor.
**/
@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent) ,
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;
  onChange: any;


  constructor() { }

  ngOnInit() {

  }

  setValue(value:any) {
    this.value = value;
    this.onChange(this.value);
  }

  // Os métodos abaixo são os obrigatórios para a implementação da interface ControlValueAccessor, que cuida de alterações dentro de um componente.
  writeValue(obj: any): void {
    this.value = obj;
  };

  registerOnChange(fn: any): void { // registra quando há alteração no valor do componente.
    this.onChange = fn;
  };

  registerOnTouched(fn: any): void {

  };

  setDisabledState?(isDisabled: boolean): void {

  };

}
