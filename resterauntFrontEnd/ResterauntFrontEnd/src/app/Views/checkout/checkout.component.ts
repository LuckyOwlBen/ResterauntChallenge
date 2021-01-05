import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from '../../Services/shoppingCart/shopping-cart.service';
import { MenuItem } from '../../Objects/menuItem';
import { PaymentModalComponent } from '../../Components/Modals/payment-modal/payment-modal.component';
import { PaymentService } from '../../Services/PaymentService/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private cartService: ShoppingCartService,
    private router: Router,
    private modal: MatDialog,
    private paymentService: PaymentService,
  ) { }

  cart: MenuItem[] = new Array();
  orderId: string;
  subTotal: string;
  total: string;

  ngOnInit(): void {
    this.cartService.addOrderNumber(this.orderId);
    this.submitCart();
  }

  submitCart() {
    this.cartService.submitOrder().subscribe(response =>{
      this.cart = response.menu;
      this.orderId = response.orderId;
      this.subTotal = response.subtotal;
      this.total = response.total;
    });
  }

  removeFromCart(menuItem: MenuItem){
    this.cartService.removeFromCart(menuItem);
    this.submitCart();
  }

  back() {
    this.router.navigate(["/menu"]);
  }

  openModal(): void {
    const modalRef = this.modal.open(PaymentModalComponent);
    modalRef.afterClosed().subscribe(result =>{
      this.paymentService.setCardData(result);
    });
  }

}
