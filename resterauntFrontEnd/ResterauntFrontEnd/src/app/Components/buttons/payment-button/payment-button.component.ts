import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.css']
})
export class PaymentButtonComponent implements OnInit {

  constructor() { }

  @Output() event = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openModal() {

    this.event.next();
  }
}
