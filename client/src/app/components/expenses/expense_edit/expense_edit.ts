import { NgFor, NgIf, Component, View } from 'angular2/angular2';

import { coreDirectives } from 'angular2/angular2';
import { formDirectives } from 'angular2/angular2';

import { Router, RouteParams } from 'angular2/router';
import { ExpenseService, IExpense } from '../../../services/expense_service';

@Component({
  selector: 'expenseedit',
  hostInjector: [ExpenseService]
})
@View({
  template: require('./expense_edit.html'),
  directives: [NgFor, NgIf]
})

export class ExpenseEdit {
  expense: IExpense;
    
  constructor(public router: Router, public routeParams: RouteParams, public expenseService: ExpenseService) {
    this.expenseService.get(this.routeParams.params["id"]).map(res => res.json()).subscribe(result => {
      this.expense = result;
    });
  }

  update(expense: IExpense) {
    this.expenseService.update(expense);
    this.router.navigate('/expenses'); // TODO enkel on success
  }
}
