import {InvoiceService} from './invoice_service';

export class InvoiceEditController {
  constructor(InvoiceService, $state) {
    var vm = this;
    vm.update = this.update;

    this.InvoiceService = InvoiceService;
    this.$state = $state;

    this.activate();
  }

  activate() {}

  update(invoice) {
    console.log("update invoice with", invoice);
    return this.InvoiceService.updateInvoice(invoice).then((data) => {
      this.$state.go("invoices");
    });
  }
}

InvoiceEditController.$inject = ['InvoiceService', '$state'];