import {InvoiceService} from './invoice_service';

export class InvoiceEditController {
  constructor(InvoiceService, $state, $stateParams,$mdToast) {
    this.InvoiceService = InvoiceService;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$mdToast = $mdToast;

    this.activate();
  }

  activate() {
    this.InvoiceService.getInvoice({id: this.$stateParams.id}).then((invoice) => {
      this.invoice = invoice;
    });
  }

  update(invoice) {
    return this.InvoiceService.updateInvoice(invoice).then((response) => {
      this.$state.go("invoices");
      this.$mdToast.show({
        template: '<md-toast>Invoice updated</md-toast>',
        hideDelay: 2000,
        position: 'top right'
      });
    });
  }
}

InvoiceEditController.$inject = ['InvoiceService', '$state', '$stateParams','$mdToast'];