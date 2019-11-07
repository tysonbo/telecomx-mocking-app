import { Customer } from './customer';
/**
 * "Id": 0,
    "PolicyNumber": "567865432198",
    "FirstName": "Jason",
    "LastName": " Gruzca",
    "DateOfBirth": "1/1/1980 12:00:00 AM",
    "Address": "269 Main St",
    "City": "Thompson",
    "State": "Oh",
    "ZipCode": "44086",
    "PhoneNumber": "4402865045",
    "Email": "jg@gmail.com"
}
 * 
 */

export class ApiCustomer {
    Id: number;
    PolicyNumber: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    Address: string;
    City: string;
    State: string;
    ZipCode: string;
    PhoneNumber: string;
    Email: string;
    constructor(c: Customer) {
            this.Id = 88;
            this.PolicyNumber = c.policy;
            this.Address = c.address;
            this.FirstName = c.name;
            this.LastName = c.name;
            this.DateOfBirth = '1-1-1980 12:00:00 AM';
            this.City = c.city;
            this.State = c.state;
            this.ZipCode = c.zip;
            this.PhoneNumber = c.phoneNumber;
            this.Email = c.email;
        }
}
