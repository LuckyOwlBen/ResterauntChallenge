import { Injectable } from '@angular/core';
import { CardData } from '../../Objects/CardData';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  constructor() { }

  private cardData: CardData;

  setCardData(cardData: CardData) {
    this.cardData = cardData;
  }

}
