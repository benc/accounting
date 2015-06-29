import {bootstrap} from 'angular2/angular2';

import {routerInjectables} from 'angular2/router';
import {formInjectables} from 'common/formInjectables';
import {httpInjectables} from 'angular2/http';
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
