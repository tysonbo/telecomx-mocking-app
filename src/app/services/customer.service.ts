import { Injectable } from '@angular/core';
import { customerData } from '../data/customerData';
import { Customer } from '../data/customer';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiCustomer } from '../data/ApiCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private apiURL = 'https://codejellyapi20191106034616.azurewebsites.net/api/customers';
  private customers: Customer[];
  private httpClient: HttpClient;

  constructor(http: HttpClient) { 
    this.customers = customerData;
    this.httpClient = http;
  }
  

  getCustomers(): Observable<Customer[]> {    
    return this.httpClient.get<Customer[]>(`${this.apiURL}`);
  }
  getCustomer(policy): Customer {    
    return this.customers.find(c => c.policy === policy);
  }

  addCustomer(customer: Customer) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let c : ApiCustomer = new ApiCustomer(customer);    
    
    return this.httpClient.post(`${this.apiURL}`, c, {headers: headers}).subscribe(resp => {
      console.log(resp);
   });
  }

  updateCustomer(customer: Customer) {
    const foundCustomer: Customer = this.customers.find(c => c.policy === customer.policy);
    if (foundCustomer) {
      const index: number = this.customers.indexOf(foundCustomer[0]);
      this.customers[index] = customer;
    } 
  }
  
  deleteCustomer(policy: string) {
    // return this.httpClient.delete(`${this.apiURL}/customers/${id}`);
    const foundCustomer: Customer = this.customers.find(c => c.policy === policy);
    if (foundCustomer) {
      const index: number = this.customers.indexOf(foundCustomer[0]);
      this.customers.splice(index);
    }     
  }

}
