import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllproductComponent } from './allproduct/allproduct.component';
import { RegistratonComponent } from './registraton/registraton.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FakeComponent } from './fake/fake.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { DialogModule } from 'primeng/dialog';
import { OrderComponent } from './order/order.component';
import { InputTextModule } from 'primeng/inputtext';
import { PaymentComponent } from './cart/payment/payment.component';
import { AddressComponent } from './cart/address/address.component';
import { SuccessComponent } from './cart/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    AllproductComponent,
    RegistratonComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ForgotComponent,
    FakeComponent,
    CheckoutComponent,
    OrderComponent,
    PaymentComponent,
    AddressComponent,
    SuccessComponent,
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule, ProgressSpinnerModule,
    ButtonModule,DialogModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [
    RegistratonComponent
  ]
})
export class AppModule { }
