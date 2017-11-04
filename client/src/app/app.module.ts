import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {routing} from "./app.routes";
import {TransactionsComponent} from "./transactions/transactions.component";
import {TransactionEditComponent} from "./transactions/edit/transaction-edit.component";
import {MatIconModule} from "@angular/material";
import {TransactionsResolver} from "./transactions/transactions.resolver";
import {TransactionResolver} from "./transactions/transaction.resolver";
import {TransactionService} from "./transactions/transaction.service";
import {HttpClientModule} from "@angular/common/http";
import {SystemComponent} from "./system/system.component";

@NgModule({
  declarations: [TransactionsComponent, TransactionEditComponent, SystemComponent, AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,

    MatIconModule,

    FlexLayoutModule
  ],
  providers: [TransactionsResolver, TransactionResolver, TransactionService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
