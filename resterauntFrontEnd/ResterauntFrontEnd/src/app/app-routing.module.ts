import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './Views/menu/menu.component';
import { CheckoutComponent } from './Views/checkout/checkout.component';
import { UpdateMenuComponent } from'./Views/update-menu/update-menu.component';
import { LoginComponent } from './Views/login/login.component';

const routes: Routes = [
  { path:'menu', component: MenuComponent },
  { path:'checkout', component: CheckoutComponent},
  { path:'updateMenu', component: UpdateMenuComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
