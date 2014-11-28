var InvoiceAddPage = function() {
  this.addButton = element(by.css('.js-add-button'));

  this.get = function() {
    browser.get("#/invoice/add");
    browser.waitForAngular();
  };

  this.addInvoice = function(options) {
    
    this.addButton.click();
  };
};

module.exports = InvoiceListPage;