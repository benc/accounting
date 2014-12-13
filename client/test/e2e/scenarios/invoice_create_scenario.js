var expect = require('../support/chai.js');
var InvoiceCreatePage = require('../pages/invoice_create_page.js');

describe('invoice', function() {
  it('should add an invoices', function() {
    var page = new InvoiceCreatePage();
    page.addInvoice({
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