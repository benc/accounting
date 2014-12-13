import {InvoiceService} from './invoice_service';

export class InvoiceListController {
  constructor(InvoiceService,$mdToast) {
    this.InvoiceService = InvoiceService;
    this.$mdToast = $mdToast;

    this.activate();
  }

  activate() {
    return this.get();
  }

  get() {
    return this.InvoiceService.getInvoices().then((data) => {
      this.invoices = data;
      return this.invoices;
    });
  }

  delete(id) {
    return this.InvoiceService.deleteInvoice({id: id}).then((data) => {
      // delete from our invoices list
      this.invoices = this.invoices.filter(function (invoice){
        return invoice.id != data.id;
      });

      // inform 
      this.$mdToast.show({
        template: '<md-toast>Invoice "' + data.name + '" deleted</md-toast>',
        hideDelay: 2000,
        position: 'top right'
      });
    });
  }
}

InvoiceListController.$inject = ['InvoiceService','$mdToast'];