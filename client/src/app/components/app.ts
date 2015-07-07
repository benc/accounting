import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';

import {ExpensesList} from './expenses/expenses_list/expenses_list';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  directives: [RouterOutlet, RouterLink, coreDirectives],
  template: require('./app.html'),
})
@RouteConfig([
  { path: '/', redirectTo: '/expenses' },
  { path: '/expenses', as: 'expenses', component: ExpensesList }
])
export class App {
  constructor(router: Router) {
  }
}
