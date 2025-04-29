export class ContractService {
    constructor() {
      this.contracts = [];
    }
  
    getContracts() {
      return this.contracts;
    }
  
    addContract(name, premium) {
      this.contracts.push({ name, premium });
    }
  }