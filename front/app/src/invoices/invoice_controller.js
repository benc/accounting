import {InvoiceService} from './invoice_service';

export class InvoiceController {
  constructor(InvoiceService) {
    var vm = this;
    vm.invoices = [];
    vm.add = this.add;

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

  add(invoice) {
    console.log("add invoice");
    return this.InvoiceService.addInvoice(invoice);
  }
}
