import { IsString, IsNumber, Min, IsDateString } from 'class-validator';

export class CreateContractDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  premiumAmount: number;

  @IsDateString({}, { message: 'startDate must be a valid ISO date string' })
  startDate: string;

  @IsDateString({}, { message: 'endDate must be a valid ISO date string' })
  endDate: string;
}
