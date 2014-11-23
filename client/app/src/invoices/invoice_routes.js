angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('invoices', {
    url: '/invoice',
    views: {
      'content@': {
        templateUrl: 'invoices/invoice_list.html',
        controller: 'InvoiceListController as vm'
      }
    },
    meta: {
      pageTitle: 'Invoices'
    }
  }).state('invoices.add', {
    url: '/add',
    views: {
      'content@': {
        templateUrl: 'invoices/invoice_edit.html',
        controller: 'InvoiceEditController as vm'
      }
    },
    meta: {
      pageTitle: 'Add invoice'
    }
  });
});