import {InvoiceController} from './invoice_controller';
import {InvoiceService} from './invoice_service';

angular.module('accounting')
  .controller('InvoiceController', ($injector) => $injector.instantiate(['InvoiceService', InvoiceController]))
  .service('InvoiceService', ($injector) => $injector.instantiate(['$resource', InvoiceService]));

import './invoice_routes';