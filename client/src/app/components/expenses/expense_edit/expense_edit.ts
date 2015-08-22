import { Component, View, Inject, FormBuilder, Validators, ControlGroup } from 'angular2/angular2';

import { coreDirectives } from 'angular2/angular2';
import { formDirectives } from 'angular2/angular2';

import { Router, RouteParams } from 'angular2/router';
import { ExpenseService, IExpense } from '../../../services/expense_service';

@Component({
  selector: 'expenseedit',
  viewInjector: [FormBuilder, ExpenseService]
})
@View({
  template: require('./expense_edit.html'),
  directives: [coreDirectives, formDirectives ]
})
export class ExpenseEdit {
  expense: IExpense;
  expenseForm: ControlGroup;

  constructor(@Inject(FormBuilder) builder: FormBuilder, public router: Router, public routeParams: RouteParams, public expenseService: ExpenseService) {
    this.expenseForm = builder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      remark: [''],
      amount: ['', Validators.required],
      currency: ['', Validators.required],
      vat: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      paymentDate: ['', Validators.required],
      indexNumber: ['', Validators.required]
    });

    this.expenseService.get(this.routeParams.params["id"]).map(res => res.json()).subscribe(result => {
      this.expense = result;
      this.expenseForm.controls['id'].updateValue(this.expense.id);
      this.expenseForm.controls['name'].updateValue(this.expense.name);
      this.expenseForm.controls['category'].updateValue(this.expense.category);
      this.expenseForm.controls['remark'].updateValue(this.expense.remark);
      this.expenseForm.controls['amount'].updateValue(this.expense.amount);
      this.expenseForm.controls['currency'].updateValue(this.expense.currency);
      this.expenseForm.controls['vat'].updateValue(this.expense.vat);
      this.expenseForm.controls['invoiceDate'].updateValue(this.expense.invoiceDate);
      this.expenseForm.controls['paymentDate'].updateValue(this.expense.paymentDate);
      this.expenseForm.controls['indexNumber'].updateValue(this.expense.indexNumber);
    });

    // this.expenseForm.valueChanges.observer({
    //   next: (value) => {
    //     console.log("form changed to: ", value);
    //   }
    // })
  }

  update(expense: IExpense) {
    if (this.expenseForm.valid) {
      this.expenseService.update(expense);
      this.router.navigate('/expenses'); // TODO enkel on success
    }
  }
}
