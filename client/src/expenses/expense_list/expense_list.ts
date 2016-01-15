import { Component, View, } from 'angular2/core';
import { CORE_DIRECTIVES, COMMON_PIPES } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Router } from 'angular2/router';

import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';

@Component({
  selector: 'expense-list',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [ExpenseService],
  pipes: [COMMON_PIPES],
  template: require('./expense_list.html')
})
export class ExpenseList {
  expenses: Observable<any>;

  constructor(private _router: Router, private _expenseService: ExpenseService) {}

  ngOnInit() {
    this.getExpenses();
  }
  
  getExpenses() {
    this.expenses = this._expenseService.all().toArray();
  }
  
  delete(expense) {
    this._expenseService.delete(expense._links.self.href).subscribe((value) => {
      this.getExpenses();
    });
  }
}
