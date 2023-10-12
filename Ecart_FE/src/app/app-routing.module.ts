import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { RegistratonComponent } from './registraton/registraton.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './cart/address/address.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { SuccessComponent } from './cart/success/success.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "login" },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allproduct', component: AllproductComponent },
  { path: 'register', component: RegistratonComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'Cart', component: CartComponent, children: [
      { path: 'check', component: CheckoutComponent }
    ]
  },
  { path: 'header', component: HeaderComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'order', component: OrderComponent },
  // { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/address', pathMatch: 'full' },
  { path: 'address', component: AddressComponent },
  { path: 'checkout', component: CheckoutComponent },
 
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
