export class InvoiceService {
  constructor($resource) {
    this.resource = $resource('http://localhost:3000/api/invoice/:id', {invoice: '@id'});
  }

  getInvoices(opts){
    return this.resource.query(opts).$promise;
  }

  updateInvoice(invoice){
    return this.resource.save(invoice).$promise;
  }
}
