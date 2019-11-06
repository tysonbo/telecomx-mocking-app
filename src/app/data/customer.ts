export class Customer {
    policy: string;
    name: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    constructor(policy: string, name: string, dob: string, address: string,
        city: string, state: string, zip: string, phoneNumber: string, email: string) {
            this.policy = policy;
            this.address = address;
            this.name = name;
            this.dob = dob;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.phoneNumber = phoneNumber;
        }
}
