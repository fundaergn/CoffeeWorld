import {Component, OnDestroy, OnInit} from '@angular/core';
import {Coffee} from '../../model/domain/coffee';
import {CoffeeService} from '../../model/service/coffee.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CartService} from '../../model/service/cart.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit,OnDestroy {

  coffee: Coffee[];

  private unsubscribe$ = new Subject<void>();
  addedProduct: String;
  constructor(
    private coffeeService: CoffeeService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.coffeeService.getCoffee()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response =>{
      this.coffee = response
    })
  }
  addToCard(product: Coffee){
    this.addedProduct=product.productName;
    this.cartService.addToCart(product);
    /*Burada oluşturduğumuz product nesnesini addToCard’atıyoruz.
    Bu yöntemle ürünü gönderip ürünün sepete eklenmesini işlemini
    sağlamış oluyoruz.*/
  }
  /*.subscribe ile Gelen response datasını bizim product’ımızın içine atadık. Servis ve component arasındaki bağlantı.*/

  private calculateTotal(products: Coffee[]): number{
    let sum = 0;
    products.forEach(value => {
      sum += (value.productPrice);
    })
    return sum;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
