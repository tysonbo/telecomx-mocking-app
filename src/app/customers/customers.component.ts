import { Component, OnInit } from '@angular/core';
import { Customer } from '../data/customer';  
import { customerData } from '../data/customerData';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  
  constructor() { 
    this.customers = customerData;
  }


  ngOnInit() {
  }

}
