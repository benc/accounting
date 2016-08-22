import { Component } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';

@Component({
  selector: 'expense-list',
  styles: [require('./expense_list.css')],
  template: require('./expense_list.html')
})
export class ExpenseList {
  expenses: Observable<any>;

  constructor(private _expenseService: ExpenseService) {}

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
