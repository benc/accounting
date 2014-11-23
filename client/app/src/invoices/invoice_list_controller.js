import {InvoiceService} from './invoice_service';

export class InvoiceListController {
  constructor(InvoiceService) {
    var vm = this;
    vm.invoices = [];

    this.InvoiceService = InvoiceService;

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
}

InvoiceListController.$inject = ['InvoiceService'];