import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.css']
})
export class ShoppingCartButtonComponent implements OnInit {

  constructor() { }

  @Output() event = new EventEmitter<any>();

  ngOnInit(): void {
  }

  goToCart() {
    this.event.next();
  }
}
