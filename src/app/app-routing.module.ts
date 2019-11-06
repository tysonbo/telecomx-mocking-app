import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';
import { MocksComponent } from './mocks/mocks.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'mocks', component: MocksComponent },
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }