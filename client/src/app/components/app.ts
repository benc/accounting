import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';

import {Invoices} from './invoices/invoices';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  directives: [RouterOutlet, RouterLink, coreDirectives],
  template: require('./app.html'),
})
@RouteConfig([
  { path: '/', redirectTo: '/invoices' },
  { path: '/invoices', as: 'invoices', component: Invoices }
])
export class App {
  constructor(router: Router) {
  }
}
