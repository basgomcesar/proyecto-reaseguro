import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContractModel } from '../infrastructure/database/contract.model';
import { SequelizeContractRepository } from '../infrastructure/contract.repository';
import { ContractService } from '../application/contract.service';
import { ContractController } from './contract.controller';

@Module({
  imports: [SequelizeModule.forFeature([ContractModel])],
  providers: [
    ContractService,
    { provide: 'ContractRepository', useClass: SequelizeContractRepository },
  ],
  controllers: [ContractController],
})
export class ContractModule {}
