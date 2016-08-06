import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';
import { Guid } from '../../utilities/guid';

export abstract class ExpenseForm {
  _expenseLink: string;

  expenseForm = new FormGroup({
    name: new FormControl(),
    amount: new FormControl(),
    currency: new FormControl(),
    vat: new FormControl(),
    invoiceDate: new FormControl(),
    paymentDate: new FormControl(),
    category: new FormControl(),
    remark: new FormControl(),
    indexNumber : new FormControl()
  });

  currencies = ['EUR', 'USD', 'GPB'];
  vatRates = ['0', '6', '21'];

  constructor(public router: Router, public route: ActivatedRoute, public expenseService: ExpenseService) {}

  ngOnInit() {
  }

  isNew(): boolean {
    return this.expenseId() === undefined || this.expenseId() === null
  }

  expenseId(): string {
    return this.route.params['id'];
  }

  goToList() {
    this.router.navigate(['expenses']);
  }

  cancel() {
    this.goToList();
  }

  saveOrUpdate(expense) {
    if(this.isNew()){
      console.info("Saving new expense");

      expense.id = Guid.newGuid();

      this.expenseService.create(JSON.stringify(expense))
        .subscribe((value) => {
          this.goToList();
        });
    } else {
      console.info("Updating expense");
      this.expenseService.update(this._expenseLink, JSON.stringify(expense))
        .subscribe((value) => {
          this.goToList();
        });
    }
  }
}
