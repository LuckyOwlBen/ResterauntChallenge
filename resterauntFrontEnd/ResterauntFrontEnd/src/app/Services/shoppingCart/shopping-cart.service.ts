import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderRequest } from '../../Models/orderRequest';
import { OrderResponse } from '../../Models/orderResponse';
import { MenuItem } from '../../Objects/menuItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  private cart: MenuItem[] =  new Array();
  private orderId: string;
  private apiURL = "http://localhost:8080/auth/submitOrder";
  private orderRequest = new OrderRequest();

  addToCart(menuItem: MenuItem) {
    if(this.cart.includes(menuItem)){
      this.cart.forEach(element => {
        if(element.itemCode == menuItem.itemCode){
          element.quantity++; 
        }
      })
    }else {
      menuItem.quantity = 1;
      this.cart.push(menuItem);
    }
    console.log(this.cart);
  }

  submitOrder(): Observable<OrderResponse> {
    this.orderRequest.menu = this.getCart();
    this.orderRequest.orderId = this.orderId;
    return this.http.post<OrderResponse>(this.apiURL,this.orderRequest)
  }

  addOrderNumber(orderNumber: string){
    this.orderId = orderNumber;
  }

  getOrderNumber(): string {
    return this.orderId;
  }


  getCart(): MenuItem[] {
    return this.cart;
  }

  removeFromCart(menuItem: MenuItem){
    let index = this.cart.indexOf(menuItem);
    
    if(menuItem.quantity > 1){
      --menuItem.quantity;
      this.cart.splice(index,1,menuItem);
    } else {
      this.cart.splice(index,1);
    }
   
  }


}
