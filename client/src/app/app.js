'use strict';

import { ComponentAnnotation as Component, ViewAnnotation as View, bootstrap } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router, routerInjectables } from 'angular2/router';
import { BrowserLocation } from 'angular2/src/router/browser_location';
import { httpInjectables } from 'angular2/http';
import { Invoices } from 'app/components/invoices/invoices';

@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  { path: '/', redirectTo: '/invoices' },
  { path: '/invoices', as: 'invoices', component: Invoices }
  // { path: '/invoice/:id', as: 'invoice', component: Orders }
])

export class App {
  constructor(router: Router, browserLocation: BrowserLocation) {
    this.router = router;

    //Manual navigation for now
    let url = browserLocation.path();
    router.navigate(url);
  }
}

//Bootstrap App
bootstrap(App, [
    httpInjectables,
    routerInjectables
]);
