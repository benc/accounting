chai = require('chai');
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;

var InvoiceListPage = require('../pages/invoice_list_page.js');

describe('invoice', function() {
  it('should list all the invoices', function() {
    var invoiceListPage = new InvoiceListPage();
    browser.waitForAngular();
    expect(invoiceListPage.list.count()).to.eventually.be.above(0);
  });
});