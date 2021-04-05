import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../Services/menuService/menu.service';
import { AddToMenuRequest } from '../../Models/addToMenuRequest';
import { AddToMenuResponse } from '../../Models/addToMenuResponse';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  itemName: string;
  itemDesc: string;
  itemPrice: string;

  ngOnInit(): void {
  }

  submit(){
    let addMenuRequest = new AddToMenuRequest();
    addMenuRequest.itemName = this.itemName;
    addMenuRequest.itemDesc = this.itemDesc;
    addMenuRequest.itemPrice = this.itemPrice;
    this.menuService.addToMenu(addMenuRequest).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
