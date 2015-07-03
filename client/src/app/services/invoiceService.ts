import { bind, Inject, Http } from 'angular2/angular2';

export class InvoiceService {
  constructor(@Inject(Http) public http: Http) {
    // was an angular 1.x resource pointing at 'http://localhost:3000/api/invoice/:id'
    this.http = http;
  }

  getInvoices() {
    return this.http.get('http://localhost:3000/api/invoice');
  }
}

export let invoiceInjectables = [
  bind(InvoiceService).toClass(InvoiceService)
];
