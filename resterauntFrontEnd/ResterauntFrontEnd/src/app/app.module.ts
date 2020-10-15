import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MaterialsModule} from './Materials/MaterialsModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuItemComponent } from './Components/menu-item/menu-item.component';
import { MenuComponent } from './Views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
