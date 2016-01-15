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
  name: Control;
  amount: Control;
  currency: Control;
  vat: Control;
  invoiceDate: Control;
  paymentDate: Control;
  category: Control;
  remark: Control;
  indexNumber: Control;
  
  currencies = ['EUR', 'USD', 'GPB'];

  constructor(private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder, private _expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseForm = this._formBuilder.group({
      'name': ['', Validators.required ],
      'amount': ['', Validators.required ],
      'currency': ['EUR', Validators.required ],
      'vat': ['', Validators.required],
      'invoiceDate': ['', Validators.required ],
      'paymentDate': [''],
      'category': ['', Validators.required],
      'remark': [''],
      'indexNumber': ['']
    });
    
    this.name = (<Control> this.expenseForm.controls['name']);
    this.amount = (<Control> this.expenseForm.controls['amount']);
    this.currency = (<Control> this.expenseForm.controls['currency']);
    this.vat = (<Control> this.expenseForm.controls['vat']);
    this.invoiceDate = (<Control> this.expenseForm.controls['invoiceDate']);
    this.paymentDate = (<Control> this.expenseForm.controls['paymentDate']);
    this.category = (<Control> this.expenseForm.controls['category']);
    this.remark = (<Control> this.expenseForm.controls['remark']);
    this.indexNumber = (<Control> this.expenseForm.controls['indexNumber']);
    
    this._expenseService.get(this._routeParams.params['id'])
      .subscribe(expense => {
        this._expenseLink = expense._links.self.href;
        this.name.updateValue(expense.name);
        this.amount.updateValue(expense.amount);
        this.currency.updateValue(expense.currency);
        this.vat.updateValue(expense.vat);
        this.invoiceDate.updateValue(expense.invoiceDate);
        this.paymentDate.updateValue(expense.paymentDate);
        this.category.updateValue(expense.category);
        this.remark.updateValue(expense.remark);
        this.indexNumber.updateValue(expense.indexNumber);
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
