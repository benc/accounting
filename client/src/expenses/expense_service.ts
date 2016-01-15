import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';

import { Observable } from 'rxjs/Observable';

// export interface IExpense {
// 	name: string,
// 	amount: number,
// 	currency: string,
// 	vat: number,
// 	invoiceDate: Date,
// 	paymentDate: Date,
// 	category: string,
// 	remark: string,
// 	indexNumber: number
// }

@Injectable()
export class ExpenseService {
  constructor(private _http:Http) {}

  all(): Observable<any> {
    return this._http
      .request("http://localhost:3000/api/expenses")
      .flatMap((res:Response) => <any> res.json()._embedded.expenses);
  }
  
  get(id: string): Observable<any> {
    return this._http
      .request(`http://localhost:3000/api/expenses/${id}`)
      .map((res:Response) => <any> res.json());
  }

  create(expense) {
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.append('Content-Type', 'application/hal+json');
        
    return this._http
      .post('http://localhost:3000/api/expenses/', expense, requestOptions)
      .map((res:Response) => <any> res.json());
  }

  update(relSelf, expense) {
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.append('Content-Type', 'application/hal+json');
        
    return this._http
      .put(relSelf, expense, requestOptions)
      .map((res:Response) => <any> res.json());
  }

  delete(relSelf, expense) {
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.append('Content-Type', 'application/hal+json');
        
    return this._http
      .delete(relSelf, requestOptions)
      .map((res:Response) => <any> res.json());
  }
}
