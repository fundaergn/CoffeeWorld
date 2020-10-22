import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoffeeComponent} from './component/coffee/coffee.component';
import {BasketDetailComponent} from './component/basket-detail/basket-detail.component';
import {CartSummaryComponent} from './component/cart-summary/cart-summary.component';
const routes: Routes = [
  {path: '', component: CoffeeComponent},
  {path: 'basket', component: BasketDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
