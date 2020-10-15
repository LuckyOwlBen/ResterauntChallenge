import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../Objects/menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  inputs: ['menuItem']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input() item: MenuItem;

  ngOnInit(): void {
    console.log(this.item);
  }

}
