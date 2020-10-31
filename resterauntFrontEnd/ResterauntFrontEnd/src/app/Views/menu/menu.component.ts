import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../Objects/menuItem';
import { MenuItemComponent } from '../../Components/menu-item/menu-item.component'
import { ShoppingCartService } from '../../Services/shoppingCart/shopping-cart.service';
import { MenuService } from '../../Services/menuService/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private shoppingCart: ShoppingCartService,
    private router : Router,
    private menuService: MenuService,
  ) { }
  
  menuItems: MenuItem[];

  @ViewChild(MenuItemComponent,{static: true})
  menuItemComponent: MenuItemComponent;

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(menuResponse =>{
      this.menuItems = menuResponse.menu;
    });
  }

  addToCart(itemSelected: MenuItem) {
    this.shoppingCart.addToCart(itemSelected);
  }

  goToCheckout(){
    this.router.navigate(['/checkout']);
  }
}
