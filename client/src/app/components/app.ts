import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';

import {Invoices} from './invoices/invoices';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [RouterOutlet, RouterLink, coreDirectives],
  template: `
  <style>
    .title  { font-family: Arial, Helvetica, sans-serif; }
    .nav    { display: inline; list-style-type: none; padding: 0;  background-color: #F8F8F8; }
    .nav li { display: inline; }
    main    { padding: 0.5em; }
  </style>

  <h1 class="title">Hello {{ name }}</h1>

  <ul class="nav">
    <li><a router-link="invoices">Invoices</a></li>
  </ul>


  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
@RouteConfig([
  { path: '/', redirectTo: '/invoices' },
  { path: '/invoices', as: 'invoices', component: Invoices }
])
export class App {
  name: string;
  // constructor(router: Router, browserLocation: BrowserLocation) {
  constructor(router: Router) {
    this.name = 'Angular 2';

    // we need to manually go to the correct uri until the router is fixed
    // let uri = browserLocation.path();
    // router.navigate(uri);
  }
}
