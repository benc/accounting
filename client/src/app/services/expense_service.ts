import { bind, Inject, Http } from 'angular2/angular2';

export interface IExpense {
	id: number,
	name: string,
	amount: number,
	currency: string,
	vat: number,
	invoice_date: Date,
	payment_date: Date,
	category: string,
	remark: string,
	index_number: number
}

export class ExpenseService {
  constructor(@Inject(Http) public http: Http) {
    this.http = http;
  }

  all() {
    return this.http.get('http://localhost:3000/api/invoice').toRx();
  }

  get(id: number) {
    return this.http.get(`http://localhost:3000/api/invoice/${id}`).toRx();
  }
  
  create(expense: IExpense) {
    return this.http.post('http://localhost:3000/api/invoice', JSON.stringify(expense)).toRx();
  }

  update(expense: IExpense) {
    return this.http.put(`http://localhost:3000/api/invoice/${expense.id}`, JSON.stringify(expense)).toRx();
  }

  delete(expense: IExpense) {
    return this.http.delete(`http://localhost:3000/api/invoice/${expense.id}`).toRx();
  }
}

export let expenseInjectables = [
  bind(ExpenseService).toClass(ExpenseService)
];
