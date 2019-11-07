import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoliciesComponent } from './policies/policies.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MocksComponent } from './mocks/mocks.component';
import { CustomerFormComponent } from './customer-form/customer-form.component'; // Added here
import { CreateMockComponent } from './create-mock/create-mock.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PoliciesComponent,
    CustomersComponent,
    HomeComponent,
    MocksComponent,
    CustomerFormComponent,
    CreateMockComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,       
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
