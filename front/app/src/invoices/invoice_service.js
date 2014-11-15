export class InvoiceService {
  constructor($resource) {
    this.$resource = $resource;
  }

  getInvoices(opts){
    return this.$resource('http://localhost:3000/api/invoice/:id', {invoice: '@id'}).query(opts).$promise;
  }
}
