import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { ExpenseService } from '../expense_service';

import { ExpenseForm } from './expense_form';

@Component({
  selector: 'expense-edit',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  providers: [ ExpenseService ],
  template: require('./expense_edit.html')
})
export class ExpenseEdit extends ExpenseForm {
    constructor(public router: Router, public routeParams: RouteParams, public formBuilder: FormBuilder, public expenseService: ExpenseService) {
      super(router, routeParams, formBuilder, expenseService);
    }
}
