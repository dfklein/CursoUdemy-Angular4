import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'

export const ROUTES: Routes = [
  {path:'', component: HomeComponent}, // toda vez que você utilizar um componente você precisa importá-lo. Ao definir as rotas você também precisa importá-lo no módulo principal (ver app.module.ts)
  {path:'about', component: AboutComponent},
  {path:'restaurants', component: RestaurantsComponent}
]
