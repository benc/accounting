import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ExpenseService } from '../expense_service';
import { ExpenseForm } from './expense_form';

@Component({
  selector: 'expense-edit',
  styles: [require('./expense_edit.css')],
  template: require('./expense_edit.html')
})
export class ExpenseEdit extends ExpenseForm {
    constructor(public router: Router, public route: ActivatedRoute, public expenseService: ExpenseService) {
      super(router, route, expenseService);
    }
}
