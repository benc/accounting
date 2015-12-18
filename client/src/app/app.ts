import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ExpenseList } from '../expenses/expense_list/expense_list';
import { ExpenseForm } from '../expenses/expense_form/expense_form';

// Operators and Observables from RxJS (e.g. .map(), .toArray(), .toPromise(), etc ) now need to be explicitly imported (once per operator in your app)
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // = flatMap
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  template: require('./app.html'),
})
@RouteConfig([
  { path: '/expenses', component: ExpenseList, name: 'ExpenseList', useAsDefault: true },
  { path: '/expenses/:rel', component: ExpenseForm, name: 'ExpenseForm' } // TODO improve when https://github.com/angular/angular/issues/2959 gets implemented
])
export class App {}
