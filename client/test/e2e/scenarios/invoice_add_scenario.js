var expect = require('../support/chai.js');
var InvoiceAddPage = require('../pages/invoice_add_page.js');

describe('invoice', function() {
  it('should add an invoices', function() {
    var invoiceAddPage = new InvoiceAddPage();
    invoiceAddPage.addInvoice({
      name: 'Acme Corp',
      category: 'Tornado hunting gear',
      remark: '10 tornado kits',      
      amount: '12000',
      currency: 'EUR',
      vat: 21,
      invoiceDate: '24/8/1999',
      paymentDate: '24/8/2014'
    });
    
    expect(browser.getCurrentUrl()).eventually.not.to.contain('add');
  });
});