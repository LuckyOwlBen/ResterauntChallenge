import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../Objects/menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input() item: MenuItem;
  @Output() selected =  new EventEmitter<MenuItem>();

  ngOnInit(): void {
  }

  selectItem(selectedItem: MenuItem) {
    //console.log(selectedItem)
    this.selected.next(selectedItem);
  }

}
