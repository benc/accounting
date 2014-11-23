import {InvoiceListController} from './invoice_list_controller';
import {InvoiceEditController} from './invoice_edit_controller';
import {InvoiceService} from './invoice_service';

angular.module('accounting')
  .controller('InvoiceListController', InvoiceListController)
  // .controller('InvoiceEditController', InvoiceEditController)
  .controller('InvoiceEditController', InvoiceEditController)
  .service('InvoiceService', InvoiceService);

import './invoice_routes';