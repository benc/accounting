import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { ExpenseEdit } from '../expenses/expense_form/expense_edit';
import { ExpenseList } from '../expenses/expense_list/expense_list';

import { ExpenseService } from '../expenses/expense_service';

// Operators and Observables from RxJS (e.g. .map(), .toArray(), .toPromise(), etc ) now need to be explicitly imported (once per operator in your app)
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // = flatMap
import 'rxjs/add/operator/toArray';

import { PolymerElement } from '@vaadin/angular2-polymer';
const PolymerComponents = [
  PolymerElement('iron-icon'),
  PolymerElement('iron-image'),
  // PolymerElement('paper-badge'),
  PolymerElement('paper-button'),
  PolymerElement('paper-card'),
  // PolymerElement('paper-checkbox'),
  PolymerElement('paper-dialog'),
  // PolymerElement('paper-dialog-scrollable'),
  // PolymerElement('paper-drawer-panel'),
  PolymerElement('paper-dropdown-menu'),
  PolymerElement('paper-fab'),
  PolymerElement('paper-header-panel'),
  PolymerElement('paper-icon-button'),
  PolymerElement('paper-input'),
  PolymerElement('paper-item'),
  PolymerElement('paper-listbox'),
  PolymerElement('paper-material'),
  PolymerElement('paper-menu'),
  PolymerElement('paper-menu-button'),
  // PolymerElement('paper-progress'),
  // PolymerElement('paper-radio-button'),
  // PolymerElement('paper-radio-group'),
  // PolymerElement('paper-ripple'),
  // PolymerElement('paper-scroll-header-panel'),
  // PolymerElement('paper-slider'),
  // PolymerElement('paper-spinner'),
  PolymerElement('paper-tabs'),
  // PolymerElement('paper-toast'),
  // PolymerElement('paper-toggle-button'),
  PolymerElement('paper-toolbar'),
  // PolymerElement('paper-tooltip'),
  PolymerElement('app-drawer-layout'),
  PolymerElement('app-drawer'),
  PolymerElement('app-header-layout'),
  PolymerElement('app-header'),
  PolymerElement('app-toolbar'),
];

@NgModule({
  declarations: [PolymerComponents],
  exports: [PolymerComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class PolymerModule {
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    PolymerModule,
    routing
  ],
  declarations: [
    AppComponent,
    ExpenseEdit,
    ExpenseList
  ],
  providers: [
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
