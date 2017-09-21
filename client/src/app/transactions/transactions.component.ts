import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Transaction} from "./transaction";
import {TransactionService} from "./transaction.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: "accounting-transactions",
  templateUrl: "./transactions.component.html"
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  routeSnapshot: ActivatedRouteSnapshot;

  constructor(private route: ActivatedRoute) {
    this.routeSnapshot = route.snapshot;
  }

  ngOnInit(): void {
    this.transactions = this.routeSnapshot.data["transactions"]._embedded.transactions;
    console.log(this.transactions);
  }
}
