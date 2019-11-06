export class Policy {
    policyNumber: string;
    product: string;
    riskType: string;
    agentCode: string;
    birthDate: string;
    last4SSN: string;

    constructor(policyNumber: string, product: string, riskType: string, agentCode:
        string, birthDate: string, last4SSN: string) {
            this.policyNumber = policyNumber;
            this.product = product;
            this.riskType = riskType;
            this.agentCode = agentCode;
            this.birthDate = birthDate;            
        }
}
