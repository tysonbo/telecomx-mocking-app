import { Customer } from './customer';

export class ApiCustomer {
    Id: number;
    Policy: string;
    Name: string;
    Dob: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    PhoneNumber: string;
    Email: string;
    constructor(c : Customer) {
            this.Id = 0;
            this.Policy = c.policy;
            this.Address = c.address;
            this.Name = c.name;
            this.Dob = c.dob;
            this.City = c.city;
            this.State = c.state;
            this.Zip = c.zip;
            this.PhoneNumber = c.phoneNumber;
            this.Email = c.email;
        }
}
