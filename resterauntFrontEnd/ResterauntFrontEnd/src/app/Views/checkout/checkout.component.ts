import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../Services/shoppingCart/shopping-cart.service';
import { MenuItem } from '../../Objects/menuItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  cart: MenuItem[] = new Array();

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(menuItem: MenuItem){
    this.cartService.removeFromCart(menuItem);
    this.cart = this.cartService.getCart();
  }

}
