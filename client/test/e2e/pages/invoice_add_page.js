InvoiceAddPage = function () {
  browser.get("#/invoice/add");
};

 InvoiceAddPage.prototype = Object.create({}, {
    name: { get: function () { return element(by.model('vm.invoice.name')).element(by.css('input')); }},
    category: { get: function () { return element(by.model('vm.invoice.category')).element(by.css('input')); }},
    remark: { get: function () { return element(by.model('vm.invoice.remark')).element(by.css('input')); }},
    amount: { get: function () { return element(by.model('vm.invoice.amount')).element(by.css('input')); }},
    currency: { get: function () { return element(by.model('vm.invoice.currency')).element(by.css('input')); }},
    indexNumber: { get: function () { return element(by.model('vm.invoice.index_number')).element(by.css('input')); }},
    vat: { get: function () { return element(by.model('vm.invoice.vat')).element(by.css('input')); }},
    invoiceDate: { get: function () { return element(by.model('vm.invoice.invoice_date')).element(by.css('input')); }},
    paymentDate: { get: function () { return element(by.model('vm.invoice.payment_date')).element(by.css('input')); }},

    addButton: { get: function () { return element(by.css('.js-add-button')); }},

    addInvoice: { value: function (invoice) {
      this.name.sendKeys(invoice.name);
      this.category.sendKeys(invoice.category);
      this.remark.sendKeys(invoice.remark);
      this.amount.sendKeys(invoice.amount);
      this.currency.sendKeys(invoice.currency);
      this.indexNumber.sendKeys(invoice.indexNumber);
      this.vat.sendKeys(invoice.vat);
      this.invoiceDate.sendKeys(invoice.invoiceDate);
      this.paymentDate.sendKeys(invoice.paymentDate);

      this.addButton.click();

      browser.waitForAngular();
    }
  }
});

module.exports = InvoiceAddPage;