export class InvoiceService {
  constructor($resource) {
    this.resource = $resource('http://localhost:3000/api/invoice/:id');
  }

  getInvoices(opts){
    return this.resource.query(opts).$promise;
  }

  getInvoice(opts){
    return this.resource.get(opts).$promise;
  }

  createInvoice(invoice){
    return this.resource.save(invoice).$promise;
  }

  updateInvoice(invoice){
    return this.resource.save({id: invoice.id}, invoice).$promise;
  }

  deleteInvoice(invoice){
    return this.resource.delete(invoice).$promise;
  }
}
