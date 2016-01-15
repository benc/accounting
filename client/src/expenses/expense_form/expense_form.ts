import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, Control, FormBuilder, Validators } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { Observable } from 'rxjs/rx';

import { ExpenseService } from '../expense_service';

import { Guid } from '../../utilities/guid';

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

  constructor(private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder, private _expenseService: ExpenseService) {}

  ngOnInit() {
    this.constructForm();
    
    if(!this.isNew()) {
      this.loadExpense(this.expenseId());
    }
  }
  
  onSubmit(value) {
    this.saveOrUpdate(value);
  }
  
  isNew(): boolean {
    return this.expenseId() === null;
  }
  
  expenseId(): string {
    return this._routeParams.params['id'];
  }
  
  constructForm() {
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
    
    // testing one two
    this.expenseForm.valueChanges
      // .filter((value) => this.expenseForm.valid)
      .subscribe((value) => {
        console.log("View Model = " + JSON.stringify(value));
      });
  }
  
  loadExpense(id: string) {
    this._expenseService.get(id)
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
  }
  
  saveOrUpdate(expense){
    if(this.isNew()){
      console.info("Saving new expense");
      
      expense.id = Guid.newGuid(); 
    
      this._expenseService.create(JSON.stringify(expense))
        .subscribe((value) => {
          console.log(value);
          this._router.navigate(['ExpenseList'])
        });
    } else { 
      console.info("Updating expense");
      this._expenseService.update(this._expenseLink, JSON.stringify(expense))
        .subscribe((value) => {
          console.log(value);
          this._router.navigate(['ExpenseList'])
        });
    }
  }
}
