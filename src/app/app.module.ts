import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoffeeComponent} from './component/coffee/coffee.component';
import {HttpClientModule} from '@angular/common/http';
import {CartService} from './model/service/cart.service';
import {CartSummaryComponent} from './component/cart-summary/cart-summary.component';
import {BasketDetailComponent} from './component/basket-detail/basket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CartSummaryComponent,
    BasketDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: 'http://localhost:5352/api/v2/coffee/'},
    CartService
    /*Sepette sürekli işlemler yapılabilmesi için cartService global yaptık*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
