import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContractService } from '../application/contract.service';
import { Contract } from '../domain/contract.entity';
import { CreateContractDto } from './dto/create-contract.dto';

@Controller('contracts')
export class ContractController {
  constructor(private readonly service: ContractService) {}

  @Get()
  findAll():Promise<Contract[]>  {
    return this.service.getContracts();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() body: CreateContractDto) {
    return this.service.addContract(body.name, body.premiumAmount);
  }
}
