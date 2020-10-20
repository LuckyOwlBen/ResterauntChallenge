import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './Views/menu/menu.component';
import { CheckoutComponent } from './Views/checkout/checkout.component';

const routes: Routes = [
  { path:'menu', component: MenuComponent },
  { path:'checkout', component: CheckoutComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
