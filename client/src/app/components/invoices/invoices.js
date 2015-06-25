'use strict';

import { ComponentAnnotation as Component, ViewAnnotation as View, NgFor } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { InvoiceService } from 'app/services/invoice_service';

@Component({
  selector: 'invoices',
  hostInjector: [InvoiceService]
})
@View({
  templateUrl: 'app/invoices/invoices/invoices.html',
  directives: [NgFor]
})

export class Invoices {

  constructor(router: Router, invoiceService: InvoiceService) {
    this.router = router;
    this.invoices = [];

    invoiceService.getInvoices().map(res => res.json()).subscribe(result => {
        this.invoices = result;
    });
  }

}
