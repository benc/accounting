import {Injectable} from "@angular/core";
import {Transaction} from "./transaction";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TransactionService {
  constructor(private httpClient: HttpClient) {}

  all(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${environment.backend.baseUrl}/api/transactions`);
  }

  get(href: string): Observable<Transaction> {
    return this.httpClient.get<Transaction>(href);
  }

  create(transaction: Transaction) {
    return this.httpClient.post(`${environment.backend.baseUrl}/api/transactions/`, JSON.stringify(transaction), {
      headers: new HttpHeaders().append("Content-Type", "application/hal+json")
    });
  }

  update(relSelf: string, transaction: Transaction) {
    return this.httpClient.put(relSelf, JSON.stringify(transaction), {
      headers: new HttpHeaders().append("Content-Type", "application/hal+json")
    });
  }

  delete(relSelf: string) {
    return this.httpClient.put(relSelf, {
      headers: new HttpHeaders().append("Content-Type", "application/hal+json")
    });
  }
}
