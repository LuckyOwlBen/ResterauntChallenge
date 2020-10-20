import { Injectable } from '@angular/core';
import { MenuItem } from '../../Objects/menuItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  private cart: MenuItem[] =  new Array();

  addToCart(menuItem: MenuItem) {
    this.cart.push(menuItem);

  }

  getCart(): MenuItem[] {
    return this.cart;
  }

  removeFromCart(menuItem: MenuItem){
    let index = this.cart.indexOf(menuItem);
    this.cart.splice(index,1)
  }


}
