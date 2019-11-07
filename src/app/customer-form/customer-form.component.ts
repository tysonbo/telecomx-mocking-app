import { Component, OnInit } from '@angular/core';
import { Customer } from '../data/customer';
import { CustomerService } from '../services/customer.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;
  niName: FormControl;
  niPolicy: FormControl;  
  niDob: FormControl;
  niAddress: FormControl;
  niCity: FormControl;
  niState: FormControl;
  niZip: FormControl;
  niPhoneNumber: FormControl;
  niEmail: FormControl;

  submitted: boolean;

  constructor(private service: CustomerService, private router: Router) { 
    this.submitted = false;
  }

  ngOnInit() {
    this.niName = new FormControl('');    
    this.niPolicy = new FormControl('');  
    this.niDob = new FormControl('');
    this.niAddress = new FormControl('');
    this.niCity = new FormControl('');
    this.niState = new FormControl('');
    this.niZip = new FormControl('');
    this.niPhoneNumber = new FormControl('');
    this.niEmail = new FormControl('');

    this.customerForm = new FormGroup({
      niName: this.niName,       
      niPolicy: this.niPolicy,
      niDob: this.niDob,
      niAddress: this.niAddress,
      niCity: this.niCity,
      niState: this.niState,
      niZip: this.niZip,
      niPhoneNumber: this.niPhoneNumber,
      niEmail: this.niEmail
    });        
  }



  onSubmit(formValues) { 
    
    this.submitted = true;       
    console.log(formValues);
    this.service.addCustomer(
      new Customer(formValues.niPolicy, formValues.niName, formValues.niDob, 
      formValues.niAddress, formValues.niCity, formValues.niState, formValues.niZip, formValues.niPhoneNumber,
      formValues.niEmail));

    this.router.navigateByUrl('/customers');

  }
  
}
