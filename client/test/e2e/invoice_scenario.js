describe('invoice', function() {
  it('should list all the invoices', function() {
    browser.get('/#/invoice');

    expect(element.all(by.repeater('invoice in vm.invoices')).count()).toBeGreaterThan(0);
  });
});