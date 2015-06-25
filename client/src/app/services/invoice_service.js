'use strict';

import { Http } from 'angular2/http';

export class InvoiceService {
  constructor(http: Http) {
    // was an angular 1.x resource pointing at 'http://localhost:3000/api/invoice/:id'
    this.http = http;
  }

  getInvoices(){
    return this.http('http://localhost:3000/api/invoice');
  }

  // getInvoice(opts){
  //   return this.resource.get(opts).$promise;
  // }
  //
  // createInvoice(invoice){
  //   return this.resource.save(invoice).$promise;
  // }
  //
  // updateInvoice(invoice){
  //   return this.resource.save({id: invoice.id}, invoice).$promise;
  // }
  //
  // deleteInvoice(invoice){
  //   return this.resource.delete(invoice).$promise;
  // }
}
