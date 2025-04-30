import { Injectable } from '@nestjs/common';
import { ContractRepository } from '../domain/contract.repository.interface';
import { Contract } from '../domain/contract.entity';
import { InjectModel } from '@nestjs/sequelize';
import { ContractModel } from './database/contract.model';

@Injectable()
export class SequelizeContractRepository implements ContractRepository {
  constructor(
    @InjectModel(ContractModel)
    private readonly contractModel: typeof ContractModel,
  ) {}

  async findAll(): Promise<Contract[]> {
    const models = await this.contractModel.findAll();
    return models.map(m => new Contract(m.id, m.name, parseFloat(m.premiumAmount as any)));
  }

  async create(name: string, premiumAmount: number): Promise<Contract> {
    const model = await this.contractModel.create({ name, premiumAmount });
    return new Contract(model.id, model.name, parseFloat(model.premiumAmount as any));
  }
}
