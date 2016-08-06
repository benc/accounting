import { Routes, RouterModule } from '@angular/router';

import { ExpenseList } from '../expenses/expense_list/expense_list';
import { ExpenseEdit } from '../expenses/expense_form/expense_edit';

const appRoutes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', children: [
    { path: '', component: ExpenseList},
    { path: ':id', component: ExpenseEdit } // TODO improve HAL handling when https://github.com/angular/angular/issues/2959 gets implemented
  ]}
];

export const routing = RouterModule.forRoot(appRoutes);
