import { Injectable } from '@angular/core';
import {CartItem} from '../domain/item';
import {Coffee} from '../domain/coffee';
import {CartItemList} from '../domain/list';

@Injectable()
export class CartService {
  /*cartItem isminde bir değişken tanımladık.
   İçine de özellik olarak cartItem array’i tanımladık.
   Bu sayede cartItem değişkenini kullanarak altında
   bulunan özelliklere ulaşacağız.*/
  cartItems: CartItem[];

  constructor() { }

  addToCart (product: Coffee): void{
    var addedItem = CartItemList.find(t => t.product.id == product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItemList.push(cartItem);
    }
  }
  list(): CartItem[] {
    return CartItemList;
  }
  removeFromCart(product: Coffee) {
    var addedItem = CartItemList.find(t => t.product.id == product.id);
    var indexNo = CartItemList.indexOf(addedItem);
    if (indexNo != -1) {
      CartItemList.splice(indexNo, 1);
    }
  }
}
