import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../../model/service/cart.service';
import {CartItem} from '../../model/domain/item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit,DoCheck {
/*ngDoCheck component açıldığında dinamik olarak her değişiklik anında çalışması için kullnıldı.
*docheck içerisinde bulunduğu işlmelerde değişiklik olduğunda bulunduğu alanı yeniler.
*ngOnInit component açıldığında çalışan fonksiyondur*/

  constructor(private cartService:CartService) { }
  totalCartItem:number; //Sepetimizde kaç adet ürün olduğunu tutmak istiyoruz.
  totalCartItemPrice:number; // sepet tutarını görüntülemek istediğimiz için
  cartItem:CartItem[]; // sepetteki ürünlerin isimlerini koymak

  ngOnInit(): void {
    this.cartItem=this.cartService.list();
    /*CartItems array’imizin içerisine cartservice listesini çektik.*/

  }

  ngDoCheck(): void {
    this.totalCartItem = this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice=this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.productPrice,0);
  }

}
