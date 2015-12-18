import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Observable } from 'rxjs/Observable';

export interface IExpense {
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

@Injectable()
export class ExpenseService {
  constructor(private _http:Http) {}

  all(): Observable<any> {
    return this._http
      .request("http://localhost:3000/api/expenses")
      .flatMap((res:Response) => <any> res.json()._embedded.expenses);
  }

  get(rel: string): Observable<any> {
    return this._http
      .request(rel)
      .map((res:Response) => <any> res.json());
  }

  // create(expense: IExpense) {
  //   // TODO as application/json
  //   return this.http.post("http://localhost:3000/api/expenses", JSON.stringify(expense));
  // }

  // update(expense: IExpense) {
  //   // TODO as application/json
  //   return this.http.put(`http://localhost:3000/api/expenses/${expense.id}`, JSON.stringify(expense));
  // }

  // delete(expense: IExpense) {
  //   return this.http.delete(`http://localhost:3000/api/expenses/${expense.id}`);
  // }
}
