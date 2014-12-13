var InvoiceListPage = require('../pages/invoice_list_page.js');

describe('invoice', function() {
  it('should list all the invoices', function() {
    var invoiceListPage = new InvoiceListPage();
    expect(invoiceListPage.list.count()).toBeGreaterThan(0);
  });
});