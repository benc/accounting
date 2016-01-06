import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, Control, FormBuilder, Validators } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';

@Component({
  selector: 'expense-form',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  providers: [ ExpenseService ],
  template: require('./expense_form.html')
})
export class ExpenseForm {
  _expenseLink: string;
  expenseForm: ControlGroup;
  currencies = ['EUR', 'USD', 'GPB'];

  constructor(private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder, private _expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseForm = this._formBuilder.group({
      'name': ['', Validators.required ],
      'amount': ['', Validators.required ],
      'currency': ['EUR', Validators.required ],
      'vat': [''],
      'invoiceDate': ['', Validators.required ],
      'paymentDate': [''],
      'category': [''],
      'remark': [''],
      'indexNumber': ['']
    });
    
    this._expenseService.get(this._routeParams.params['id'])
      .subscribe(expense => {
        this._expenseLink = expense._links.self.href;
        (<Control> this.expenseForm.controls['name']).updateValue(expense.name);
        (<Control> this.expenseForm.controls['amount']).updateValue(expense.amount);
        (<Control> this.expenseForm.controls['currency']).updateValue(expense.currency);
        (<Control> this.expenseForm.controls['vat']).updateValue(expense.vat);
        (<Control> this.expenseForm.controls['invoiceDate']).updateValue(expense.invoiceDate);
        (<Control> this.expenseForm.controls['paymentDate']).updateValue(expense.paymentDate);
        (<Control> this.expenseForm.controls['category']).updateValue(expense.category);
        (<Control> this.expenseForm.controls['remark']).updateValue(expense.remark);
        (<Control> this.expenseForm.controls['indexNumber']).updateValue(expense.indexNumber);
      });
      
    this.expenseForm.valueChanges
      // .filter((value) => this.expenseForm.valid)
      .subscribe((value) => {
        console.log("View Model = " + JSON.stringify(value));
      });
  }
  
  onSubmit(value) {
    this.saveOrUpdate(value);
  }
  
  saveOrUpdate(value){
    if(this._expenseLink){
      console.info("Updating stuff");
      this._expenseService.update(this._expenseLink, JSON.stringify(value))
        .subscribe((value) => {
          console.log(value);
          this._router.navigate(['ExpenseList'])
        });
    } else {
      console.warn("Saving not implemented yet");
    }
  }
}
