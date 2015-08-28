import { bind, Inject } from 'angular2/angular2';
import { Http } from 'angular2/bundles/http';

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
    return this.http.get("http://localhost:9020/api/expense").toRx();
  }

  get(id: string) {
    return this.http.get(`http://localhost:9020/api/expense/${id}`).toRx();
  }

  create(expense: IExpense) {
    // TODO as application/json
    return this.http.post("http://localhost:9020/api/expense", JSON.stringify(expense)).toRx();
  }

  update(expense: IExpense) {
    // TODO as application/json
    return this.http.put(`http://localhost:9020/api/expense/${expense.id}`, JSON.stringify(expense)).toRx();
  }

  delete(expense: IExpense) {
    return this.http.delete(`http://localhost:9020/api/expense/${expense.id}`).toRx();
  }
}

export let expenseInjectables = [
  bind(ExpenseService).toClass(ExpenseService)
];
