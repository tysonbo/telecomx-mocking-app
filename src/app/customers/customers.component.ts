import { Component, OnInit } from '@angular/core';
import { Customer } from '../data/customer';  
import { customerData } from '../data/customerData';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  
  constructor(private service: CustomerService) { 
    this.customers = new Array<Customer>();
  }


  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }
}
