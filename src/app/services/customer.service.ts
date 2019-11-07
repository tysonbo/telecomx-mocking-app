import { Injectable } from '@angular/core';
import { customerData } from '../data/customerData';
import { Customer } from '../data/customer';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private apiURL = 'http://www.server.com/api/';
  private customers: Customer[];
  private http: HttpClient;

  constructor(http: HttpClient) { 
    this.customers = customerData;
    this.http = http;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
  getCustomer(policy): Customer {
    // return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
    return this.customers.find(c => c.policy === policy);
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    // return this.httpClient.post(`${this.apiURL}/customers/`,customer);
    // if (!this.customers.indexOf(customer)) {
    //   this.customers.push(customer);
    // } 
    
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
