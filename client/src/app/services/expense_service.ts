import { bind, Inject, Http } from 'angular2/angular2';

export interface IExpense {
	id: number,
	name: string,
	amount: number,
	currency: string,
	vat: number,
	invoiceDate: Date,
	paymentDate: Date,
	category: string,
	remark: string,
	indexNumber: number
}

export class ExpenseService {
  constructor(@Inject(Http) public http: Http) {
    this.http = http;
  }

  all() {
    return this.http.get('http://localhost:9020/api/expense').toRx();
  }

  get(id: number) {
    return this.http.get(`http://localhost:9020/api/expense/${id}`).toRx();
  }

  create(expense: IExpense) {
    return this.http.post('http://localhost:9020/api/expense', JSON.stringify(expense)).toRx();
  }

  update(expense: IExpense) {
    return this.http.put(`http://localhost:9020/api/expense/${expense.id}`, JSON.stringify(expense)).toRx();
  }

  delete(expense: IExpense) {
    return this.http.delete(`http://localhost:9020/api/expense/${expense.id}`).toRx();
  }
}

export let expenseInjectables = [
  bind(ExpenseService).toClass(ExpenseService)
];
