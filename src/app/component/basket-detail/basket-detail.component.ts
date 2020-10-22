import {Component, DoCheck, OnInit} from '@angular/core';
import {CartItem} from '../../model/domain/item';
import {CartService} from '../../model/service/cart.service';
import {Coffee} from '../../model/domain/coffee';

@Component({
  selector: 'app-basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.scss']
})
export class BasketDetailComponent implements OnInit {

  constructor(private cartService:CartService) {}
  isProductRemoved: boolean = false;
  cartItem:CartItem[]; // sepetteki ürünlerin isimlerini koymak


  ngOnInit(): void {
    this.cartItem = this.cartService.list();
  }
  removeFromCart(product: Coffee) { // Adım 5
    if (confirm("Emin misiniz ?")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
  confirm(){
    if (confirm("Siparişiniz Alınmıştır.")){ }
  }


}
