import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../Objects/menuItem';
import { MenuItemComponent } from '../../Components/menu-item/menu-item.component'
import { ShoppingCartService } from '../../Services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private shoppingCart: ShoppingCartService,
    private router : Router,
  ) { }
  
  menuItems: MenuItem[];

  @ViewChild(MenuItemComponent,{static: true})
  menuItemComponent: MenuItemComponent;

  ngOnInit(): void {
    this.menuItems = new Array();
    let item1 = new MenuItem();
    item1.itemName = "steak";
    item1.itemDescription = "yum";
    item1.price = "3.99";
    item1.itemCode = "001";
    this.menuItems.push(item1);
    let item2 = new MenuItem();
    item2.itemName = "steak";
    item2.itemDescription = "yum";
    item2.price = "3.99";
    item2.itemCode = "002"
    this.menuItems.push(item2);
  }

  addToCart(itemSelected: MenuItem) {
    this.shoppingCart.addToCart(itemSelected);
  }

  goToCheckout(){
    this.router.navigate(['/checkout']);
  }
}
