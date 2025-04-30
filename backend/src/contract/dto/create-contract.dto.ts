import { IsString, IsNumber, Min } from 'class-validator';

export class CreateContractDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  premiumAmount: number;
}
