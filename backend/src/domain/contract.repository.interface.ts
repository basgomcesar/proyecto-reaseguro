import { Contract } from './contract.entity';

export interface ContractRepository {
  findAll(): Promise<Contract[]>;
  create(name: string, premiumAmount: number, startDate: Date, endDate: Date): Promise<Contract>;
}
