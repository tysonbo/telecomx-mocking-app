import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoliciesComponent } from './policies/policies.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MocksComponent } from './mocks/mocks.component';
import { CreateMockComponent } from './create-mock/create-mock.component'; // Added here
import { NgForms } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PoliciesComponent,
    CustomersComponent,
    HomeComponent,
    MocksComponent,
    CreateMockComponent,
    NgForms
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
