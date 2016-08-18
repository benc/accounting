import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';
import { Guid } from '../../utilities/guid';

export abstract class ExpenseForm {
  _expenseLink: string;

  expenseForm = new FormGroup({
    'new': new FormControl(),
    _links: new FormControl(),
    name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    vat: new FormControl('', Validators.required),
    invoiceDate: new FormControl('', Validators.required),
    paymentDate: new FormControl(),
    category: new FormControl('', Validators.required),
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
    return this.route.snapshot.params["href"];
  }

  goToList() {
    this.router.navigate(['expenses']);
  }

  cancel() {
    this.goToList();
  }

  loadExpense(href: string) {
    this.expenseService.get(href)
      .subscribe(expense => {
        this.expenseForm.setValue(expense);
      });
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
      this.expenseService.update(expense._links.expense.href, JSON.stringify(expense))
        .subscribe((value) => {
          this.goToList();
        });
    }
  }
}
