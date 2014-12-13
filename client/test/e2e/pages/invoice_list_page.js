InvoiceListPage = function () {
  browser.get("#/invoice");
};

 InvoiceListPage.prototype = Object.create({}, {
    list: { get: function () { return element.all(by.repeater('invoice in vm.invoices')); }},
    
    addButton: { get: function () { return element(by.css('.js-add-button')); }},

    add: { value: function (invoice) {
      this.addButton.click();
    }
  }
});

module.exports = InvoiceListPage;