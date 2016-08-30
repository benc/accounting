import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { ExpenseEdit } from '../expenses/expense_form/expense_edit';
import { ExpenseList } from '../expenses/expense_list/expense_list';

import { ExpenseService } from '../expenses/expense_service';

// Operators and Observables from RxJS (e.g. .map(), .toArray(), .toPromise(), etc ) now need to be explicitly imported (once per operator in your app)
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // = flatMap
import 'rxjs/add/operator/toArray';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ExpenseEdit,
    ExpenseList
  ],
  providers: [
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
