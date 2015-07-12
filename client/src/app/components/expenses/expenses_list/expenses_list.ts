import { NgFor, NgIf, Component, View } from 'angular2/angular2';

import { coreDirectives } from 'angular2/angular2';
import { formDirectives } from 'angular2/angular2';

import { Router, RouterLink } from 'angular2/router';
import { ExpenseService, IExpense } from '../../../services/expense_service';

@Component({
  selector: 'expenseslist',
  hostInjector: [ExpenseService]
})
@View({
  template: require('./expenses_list.html'),
  directives: [NgFor, NgIf]
})

export class ExpensesList {
  expenses: IExpense[];

  constructor(public router: Router, public expenseService: ExpenseService) {
    expenseService.all().map(res => res.json()).subscribe(result => {
      this.expenses = result;
    });
  }

  update(expense: IExpense) {
    this.expenseService.update(expense);
  }

  delete(expense: IExpense) {
    this.expenseService.delete(expense).subscribe(() => {
      this.expenses.splice(this.expenses.indexOf(expense), 1);
    });
  }
}
