import { NgFor, NgIf, Component, View } from 'angular2/angular2';

import { coreDirectives } from 'angular2/angular2';
import { formDirectives } from 'angular2/angular2';

import { Router, RouterLink } from 'angular2/router';
import { ExpenseService } from '../../../services/expense_service';

@Component({
  selector: 'expenses-list',
  hostInjector: [ExpenseService]
})
@View({
  template: require('./expenses_list.html'),
  directives: [NgFor, NgIf]
})

export class ExpensesList {
  expenses: Array<any>;

  constructor(public router: Router, public expenseService: ExpenseService) {
    expenseService.getExpenses().map(res => res.json()).subscribe(result => {
      this.expenses = result;
    });
  }

}
