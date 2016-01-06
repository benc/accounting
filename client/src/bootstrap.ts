import { bootstrap } from 'angular2/platform/browser';
import { ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/common_dom';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { App } from './app/app';

export function main() {
  return bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS, // TODO set PathLocationStrategy
    FORM_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
