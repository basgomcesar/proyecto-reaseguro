export class Contract {
    constructor(
      public readonly id: number,
      public readonly name: string,
      public readonly premiumAmount: number,
      public readonly startDate: Date,
      public readonly endDate: Date,
    ) {}
  }
  