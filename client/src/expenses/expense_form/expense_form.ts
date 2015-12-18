import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';
import { ExpenseService } from '../expense_service';

@Component({
  selector: 'expense-form',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  providers: [ ExpenseService ],
  template: require('./expense_form.html')
})
export class ExpenseForm {
  expense;
  currencies = ['EUR', 'USD'];

  constructor(public router: Router, public routeParams: RouteParams, public expenseService: ExpenseService) {
    this.expenseService.get(this.routeParams.params["rel"]).subscribe(expense => this.expense = expense);
  }

  ngOnInit() {
    // TODO too late! can't ng-model use an asyncpipe?
    // this.expenseService.get(this.routeParams.params["rel"]).subscribe(expense => this.expense = expense);
  }
}
