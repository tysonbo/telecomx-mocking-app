import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoliciesComponent } from './policies/policies.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MocksComponent } from './mocks/mocks.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component'; // Added here
import { CreateMockComponent } from './create-mock/create-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    PoliciesComponent,
    CustomersComponent,
    HomeComponent,
    MocksComponent,
    CreateCustomerComponent,
    CreateMockComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
