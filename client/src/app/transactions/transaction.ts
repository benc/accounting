export class Transaction {
  fromAccount: string;
  toAccount: string;
  name: string;
  // category: Category;
  currency: string;
  remark: string;
  amount: number;
  vat: number;
  invoiceDate: Date;
  paymentDate: Date;
  indexNumber: number;
}
