import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Route, Redirect, Router} from 'angular2/router';

import {ExpensesList} from './expenses/expenses_list/expenses_list';
import {ExpenseEdit} from './expenses/expense_edit/expense_edit';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  directives: [RouterOutlet, RouterLink, CORE_DIRECTIVES],
  template: require('./app.html'),
})
@RouteConfig([
  new Redirect({ path: '/', redirectTo: '/expenses', as: 'home'}),
  new Route({ path: '/expenses', component: ExpensesList, as: 'expenses'}),
  new Route({ path: '/expenses/:id', component: ExpenseEdit, as: 'editexpense'})
])
export class App {
  constructor(router: Router) {
  }
}

// { path: '/expenses/:id', as: 'editexpense', component: ExpenseEdit }
