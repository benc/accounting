import { NgFor, NgIf, Component, View } from 'angular2/angular2';

import { coreDirectives } from 'angular2/angular2';
import { formDirectives } from 'angular2/angular2';

import { Router, RouterLink } from 'angular2/router';
import { InvoiceService } from '../../services/invoiceService';

@Component({
  selector: 'invoices',
  hostInjector: [InvoiceService]
})
@View({
  template: require('./invoices.html'),
  directives: [NgFor, NgIf]
})

export class Invoices {
  invoices: Array<any>;
  
  constructor(public router: Router, public invoiceService: InvoiceService) {
    this.router = router;
    this.invoices = [];

    invoiceService.getInvoices().map(res => res.json()).subscribe(result => {
      this.invoices = result;
    });
  }

}
