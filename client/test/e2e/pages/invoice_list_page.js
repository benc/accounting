var InvoiceListPage = function() {
  this.list = element.all(by.repeater('invoice in vm.invoices'));
  // this.firstElement = list.first();
  // this.invoiceDate = firstElement.element(by.css('.invoiceDate'));
  // this.paymentDate = firstElement.element(by.css('.paymentDate'));
  // this.vat = firstElement.element(by.css('.vat'));
  // this.indexNumber = firstElement.element(by.css('.indexNumber'));
  this.addButton = element(by.css('.js-add-button'));

  this.get = function() {
    browser.get("#/invoice");
    browser.waitForAngular();
  };

  this.add = function(name) {
    browser.get("#/invoice");
    this.addButton.click();
  };
};

module.exports = InvoiceListPage;