import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';

import {formInjectables} from 'common/formInjectables';

// Our collection of injectables services
import {appServicesInjectables} from './services/services';

// Our top level component that holds all of our components
import {App} from './components/app';

/*
  Bootstrap our Angular app with our top level component `App`
  and inject our global services/bindings into Angular's dependency injection
*/
bootstrap(
  // Top Level Component
  App,

  // AppInjectors
  [
    // Our collection of services from /services
    appServicesInjectables,

    // Angular's form builder service
    formInjectables,

    // Angular's router
    routerInjectables
  ]
);
