import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MaterialsModule} from './Materials/MaterialsModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuItemComponent } from './Components/menu-item/menu-item.component';
import { MenuComponent } from './Views/menu/menu.component';
import { ShoppingCartButtonComponent } from './Components/buttons/shopping-cart-button/shopping-cart-button.component';
import { CheckoutComponent } from './Views/checkout/checkout.component';
import { PaymentModalComponent } from './Components/Modals/payment-modal/payment-modal.component';
import { PaymentButtonComponent } from './Components/buttons/payment-button/payment-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateMenuComponent } from './Views/update-menu/update-menu.component';
import { LoginComponent } from './Views/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
    ShoppingCartButtonComponent,
    CheckoutComponent,
    PaymentModalComponent,
    PaymentButtonComponent,
    UpdateMenuComponent,
    LoginComponent,
    NavbarComponent,
  ],
  entryComponents: [
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
