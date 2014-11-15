import {InvoiceService} from './invoice_service';

export class InvoiceController {
  constructor(InvoiceService) {
    this.invoices = [];
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
      console.log(data);
    });
  }
}
