import { Component, OnInit } from '@angular/core';
import { Customer } from '../data/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private service: CustomerService) { }

  ngOnInit() {
  }

  model = new Customer('64445678', 'Barney Rubble', '1981-10-18', '4545 Bedrock Avenue', 
  'Bedrock', 'CO', '44137', '333-333-3333', 'mickey@outlook.com')
  submitted = false;

  onSubmit() { 
    this.submitted = true;     
  }
  
  newCustomer() {
    this.model = new Customer('88845678', '', '', '', '', '', '', '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
