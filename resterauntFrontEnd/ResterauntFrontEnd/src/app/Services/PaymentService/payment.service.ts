import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from '../../Objects/CardData';
import { MenuItem } from '../../Objects/menuItem';
import { PaymentRequest } from '../../Models/paymentRequest';
import { PaymentResponse } from '../../Models/paymentResponse';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  constructor(private http: HttpClient) { }

  private cardData: CardData;
  private orderId: string;
  private menuItems: MenuItem[];
  private apiURL = "http://localhost:8080/auth/processPayment";

  setCardData(cardData: CardData) {
    this.cardData = cardData;
  }

  setOrderId(orderId: string) {
    this.orderId = orderId;
  }

  setMenuItem(menuItems: MenuItem[]){
    this.menuItems = menuItems;
  }

  submitOrder(): Observable<PaymentResponse> {
    let paymentRequest = new PaymentRequest();
    paymentRequest.orderId = this.orderId;
    paymentRequest.cardNumber = this.cardData.cardNumber;
    paymentRequest.expDate = this.cardData.expDate;
    paymentRequest.address = this.cardData.address;
    paymentRequest.nameOnCard = this.cardData.nameOnCard;
    paymentRequest.securityCode = this.cardData.securityCode;
    paymentRequest.menu = this.menuItems;
    return this.http.post<PaymentResponse>(this.apiURL, paymentRequest)
  }

}
