angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('invoices', {
    url: '/invoice',
    views: {
      'content@': {
        templateUrl: 'invoices/invoice_list.html',
        controller: 'InvoiceListController as ctrl'
      }
    },
    meta: {
      pageTitle: 'Invoices'
    }
  }).state('invoices.create', {
    url: '/create',
    views: {
      'content@': {
        templateUrl: 'invoices/invoice_create.html',
        controller: 'InvoiceCreateController as ctrl'
      }
    },
    meta: {
      pageTitle: 'Create invoice'
    }
  }).state('invoices.edit', {
    url: '/:id/edit',
    views: {
      'content@': {
        templateUrl: 'invoices/invoice_edit.html',
        controller: 'InvoiceEditController as ctrl'
      }
    },
    meta: {
      pageTitle: 'Update invoice'
    }
  });
});