import { Inject, Injectable } from '@nestjs/common';
import { ContractRepository } from '../domain/contract.repository.interface';
import { Contract } from '../domain/contract.entity';
import { CreateContractDto } from '../contract/dto/create-contract.dto';

@Injectable()
export class ContractService {
  constructor(
    @Inject('ContractRepository')
    private readonly repository: ContractRepository
) {}

  getContracts(): Promise<Contract[]> {
    return this.repository.findAll();
  }

  addContract(dto: CreateContractDto): Promise<Contract> {
    const { name, premiumAmount, startDate, endDate } = dto;
    return this.repository.create(name, premiumAmount, new Date(startDate), new Date(endDate));
  }
}
