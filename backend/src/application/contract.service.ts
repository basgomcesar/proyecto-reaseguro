import { Inject, Injectable } from '@nestjs/common';
import { ContractRepository } from '../domain/contract.repository.interface';
import { Contract } from '../domain/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @Inject('ContractRepository')
    private readonly repository: ContractRepository
) {}

  getContracts(): Promise<Contract[]> {
    return this.repository.findAll();
  }

  addContract(name: string, premiumAmount: number): Promise<Contract> {
    return this.repository.create(name, premiumAmount);
  }
}
