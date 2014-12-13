import {InvoiceService} from './invoice_service';

export class InvoiceCreateController {
  constructor(InvoiceService, $state) {
    this.InvoiceService = InvoiceService;
    this.$state = $state;

    this.activate();
  }

  activate() {}

  create(invoice) {
    return this.InvoiceService.createInvoice(invoice).then((data) => {
      this.$state.go("invoices");
    });
  }
}

InvoiceCreateController.$inject = ['InvoiceService', '$state'];