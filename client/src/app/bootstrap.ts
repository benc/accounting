import {bootstrap, httpInjectables, formInjectables} from 'angular2/angular2';

import {routerInjectables} from 'angular2/router';
import {appServicesInjectables} from './services/services';

import {App} from './components/app';

bootstrap(
  App,
  [
    appServicesInjectables,
    formInjectables,
    httpInjectables,
    routerInjectables
  ]
);
