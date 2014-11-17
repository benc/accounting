import {InvoiceListController} from './invoice_list_controller';
import {InvoiceService} from './invoice_service';

angular.module('accounting')
  .controller('InvoiceListController', ($injector) => $injector.instantiate(['InvoiceService', InvoiceListController]))
  .service('InvoiceService', ($injector) => $injector.instantiate(['$resource', InvoiceService]));

import './invoice_routes';