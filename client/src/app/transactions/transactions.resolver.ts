import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Transaction} from "./transaction";
import {TransactionService} from "./transaction.service";

@Injectable()
export class TransactionsResolver implements Resolve<Transaction[]> {
  constructor(public transactionService: TransactionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction[]> {
    return this.transactionService.all();
  }
}
