import {RouterModule, Routes} from "@angular/router";
import {TransactionEditComponent} from "./transactions/edit/transaction-edit.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {TransactionsResolver} from "./transactions/transactions.resolver";
import {TransactionResolver} from "./transactions/transaction.resolver";
import {SystemComponent} from "./system/system.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/transactions"
  },
  {
    path: "transactions",
    children: [
      {
        path: "",
        component: TransactionsComponent,
        resolve: {
          transactions: TransactionsResolver
        }
      },
      {
        path: "new",
        component: TransactionEditComponent,
        data: {
          newTransaction: true
        }
      },
      {
        path: ":id",
        component: TransactionEditComponent,
        resolve: {
          transaction: TransactionResolver
        },
        data: {
          edit: true
        }
      }
    ]
  },
  {
    path: "system",
    children: [
      {
        path: "",
        component: SystemComponent
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: false});
