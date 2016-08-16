import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';
import { Guid } from '../../utilities/guid';

export abstract class ExpenseForm {
  _expenseLink: string;

  expenseForm = new FormGroup({
    businessId: new FormControl,
    'new': new FormControl(),
    _links: new FormControl(),
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
    if(!this.isNew()) {
      this.loadExpense(this.expenseId());
    }
  }

  isNew(): boolean {
    return this.expenseId() === undefined || this.expenseId() === null
  }

  expenseId(): string {
    return this.route.snapshot.params["id"];
  }

  goToList() {
    this.router.navigate(['expenses']);
  }

  cancel() {
    this.goToList();
  }

  loadExpense(id: string) {
    this.expenseService.get(id)
      .subscribe(expense => {
        this.expenseForm.setValue(expense);
      });
  }

  saveOrUpdate(expense) {
    debugger
    if(this.isNew()){
      console.info("Saving new expense");

      expense.id = Guid.newGuid();

      this.expenseService.create(JSON.stringify(expense))
        .subscribe((value) => {
          this.goToList();
        });
    } else {
      console.info("Updating expense");
      this.expenseService.update(expense._links.expense.href, JSON.stringify(expense))
        .subscribe((value) => {
          this.goToList();
        });
    }
  }
}
