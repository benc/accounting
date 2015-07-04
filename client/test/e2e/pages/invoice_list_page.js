InvoiceListPage = function () {
  browser.get("/invoices");
};

InvoiceListPage.prototype = Object.create({}, {
  list: {
    get: function () {
      return element.all(by.css('div.invoice'));
    }
  }
});

module.exports = InvoiceListPage;