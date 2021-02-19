import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from '../../Services/shoppingCart/shopping-cart.service';
import { MenuItem } from '../../Objects/menuItem';
import { CardData } from '../../Objects/CardData';
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
    this.orderId = this.cartService.getOrderNumber();
    this.submitCart();
  }

  submitCart() {
    this.cartService.submitOrder().subscribe(response =>{
      this.cart = response.menu;
      this.orderId = response.orderId;
      this.subTotal = response.subtotal;
      this.total = response.total;
      this.cartService.addOrderNumber(response.orderId);
    });
  }

  removeFromCart(menuItem: MenuItem){
    this.cartService.removeFromCart(menuItem);
    this.ngOnInit();
  }

  back() {
    this.router.navigate(["/menu"]);
  }

  openModal(): void {
    const modalRef = this.modal.open(PaymentModalComponent,{
      data:{cardData: new CardData()}
    });
    modalRef.afterClosed().subscribe(result =>{
      this.paymentService.setCardData(result);
      this.paymentService.setMenuItem(this.cart);
      this.paymentService.submitOrder();
    });
  }

}
