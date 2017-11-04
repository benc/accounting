import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

import {Component, OnInit} from "@angular/core";
import {TransactionService} from "../transaction.service";
import {Guid} from "../../utilities/guid";
import {Transaction} from "../transaction";

@Component({
  selector: "accounting-transaction-edit",
  templateUrl: "./transaction-edit.component.html"
})
export class TransactionEditComponent implements OnInit {
  transaction: Transaction;
  routeSnapshot: ActivatedRouteSnapshot;

  transactionForm = new FormGroup({
    new: new FormControl(),
    _links: new FormControl(),
    name: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    currency: new FormControl("", Validators.required),
    vat: new FormControl("", Validators.required),
    invoiceDate: new FormControl("", Validators.required),
    paymentDate: new FormControl(),
    category: new FormControl("", Validators.required),
    remark: new FormControl(),
    indexNumber: new FormControl()
  });

  currencies = ["EUR", "USD", "GPB"];
  vatRates = ["0", "6", "21"];

  constructor(public router: Router, public route: ActivatedRoute, public transactionService: TransactionService) {
    this.routeSnapshot = route.snapshot;
  }

  ngOnInit(): void {
    if (this.isNew()) {
      this.transaction = new Transaction();
    } else if (this.isEdit()) {
      this.transaction = this.routeSnapshot.data["transaction"];
    } else {
      throw new Error("Issue loading Transaction");
    }
  }

  goToList() {
    this.router.navigate(["transactions"]);
  }

  isNew() {
    return "newTransaction" in this.routeSnapshot.data;
  }

  isEdit() {
    return "transaction" in this.routeSnapshot.data;
  }

  cancel() {
    this.goToList();
  }

  saveOrUpdate(transaction) {
    if (this.isNew()) {
      transaction.id = Guid.newGuid();

      this.transactionService.create(transaction).subscribe(value => {
        this.goToList();
      });
    } else {
      this.transactionService.update(transaction._links.transaction.href, transaction).subscribe(value => {
        this.goToList();
      });
    }
  }
}
