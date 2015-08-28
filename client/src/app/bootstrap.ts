/// <reference path="../../typings/custom/custom.d.ts" />

import {bootstrap, FORM_BINDINGS} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/bundles/http';

import {routerInjectables} from 'angular2/router';
import {appServicesInjectables} from './services/services';

import {App} from './components/app';

bootstrap(
  App,
  [
    appServicesInjectables,
    FORM_BINDINGS,
    HTTP_BINDINGS,
    routerInjectables
  ]
);
