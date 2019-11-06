import { Component, OnInit } from '@angular/core';
import { policyData } from '../data/policies';
import { Policy } from '../data/policy';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  policies: Policy[];
  
  constructor() { 
    this.policies = policyData;
  }

  ngOnInit() {
  }
}
