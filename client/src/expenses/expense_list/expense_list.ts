import { Component, View, } from 'angular2/core';
import { CORE_DIRECTIVES, COMMON_PIPES } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Observable } from 'rxjs/rx';

import { ExpenseService, IExpense } from '../expense_service';

@Component({
  selector: 'expense-list',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [ExpenseService],
  pipes: [COMMON_PIPES],
  template: require('./expense_list.html')
})
export class ExpenseList {
  expenses: Observable<any>;

  constructor(public expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenses = this.expenseService.all().toArray();
  }
}
