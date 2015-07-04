var InvoiceListPage = require('../pages/invoice_list_page.js');

describe('invoice', function() {
  it('should list all the invoices', function() {
    var page = new InvoiceListPage();
    expect(page.list.count()).toBeGreaterThan(0);
  });
});