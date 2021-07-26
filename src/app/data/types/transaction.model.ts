export class TransactionModel {
  constructor(
    public color: string,
    public header: string,
    public amountOne?: number,
    public amountTwo?: number,
    public amount?: number
  ) {}
}
