import { NgFor, NgIf, Component, View } from 'angular2/angular2';

import { RouterLink } from 'angular2/router';
import { ExpenseService, IExpense } from '../../../services/expense_service';

@Component({
  selector: 'expenseslist',
  hostInjector: [ExpenseService]
})
@View({
  template: require('./expenses_list.html'),
  directives: [NgFor, NgIf, RouterLink]
})
export class ExpensesList {
  expenses: IExpense[];

  constructor(public expenseService: ExpenseService) {
    expenseService.all().map(res => res.json()).subscribe(result => {
      this.expenses = result;
    });
  }

  delete(expense: IExpense) {
    this.expenseService.delete(expense).subscribe(() => {
      this.expenses.splice(this.expenses.indexOf(expense), 1);
    });
  }
}
