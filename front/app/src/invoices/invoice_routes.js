angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('invoices', {
    url: '/invoice',
    templateUrl: 'invoices/invoice_list.html',
    controller: 'InvoiceListController as vm',
    meta: {
      pageTitle: 'Invoices'
    }
  });
});