import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'contracts_test_cesarbasiliogomez',
  timestamps: false,
})
export class ContractModel extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false, field: 'premium_amount' })
  declare premiumAmount: number;
}
