import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from '../components/drink/drink.component';
import { CartComponent } from '../components/cart/cart.component';
import { OrderComponent } from '../components/order/order.component';
import { HomeComponent } from '../home/home.component';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent, },
      // {
      //   path: 'home',
       
      // },
      { path: 'drinks', component: DrinkComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orders', component: OrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
