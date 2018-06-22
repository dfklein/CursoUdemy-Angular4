import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ErrorHandler} from '../app.error-handler';
import {Restaurant} from "./restaurant/restaurant.model";
import {MEAT_API} from '../app.api';

// Um serviço deve sempre ser injetado ou no módulo principal ou no componente (este aqui foi injetado no módulo principal -> veja em app.module.ts dentro do @NgModule a propriedade 'providers')
@Injectable() // esta anotação torna o serviço injetável
export class RestaurantsService {

  constructor(private http: Http) {

  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      // O observable é um objeto de tipo "Response" (que contém informações como status da chamada, etc). Com isso aqui você substitui o response pelo Json que será consumido.
      // Os passos são importar o operador map aqui e fazer um subscribe no seu componente
      // encare este método apenas como uma configuração da chamada do serviço. O que efetivamente executa a chamada é o método é o subscribe
      // Veja como ficou a chamada desse cara no ngOnInit de restaurants.component.ts
      .catch(ErrorHandler.handleError) // o catch serve para lidar com erros na requisição. O parâmetro passado é um objeto do tipo Observable
    
  }

}
