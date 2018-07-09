import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'

export const ROUTES: Routes = [
  {path:'', component: HomeComponent}, // toda vez que você utilizar um componente você precisa importá-lo. Ao definir as rotas você também precisa importá-lo no módulo principal (ver app.module.ts)
  {path:'about', component: AboutComponent},
  {path:'restaurants', component: RestaurantsComponent},
  {path:'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch:'full'}, // path match full quer dizer que o redirecionamento funcionará apenas para esta URL especificamente.
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent} // veja em restaurant-detail.component.html que você declarou outro router-outlet, que é para comportar o conteúdo das rotas filhas.
    ]}
]
