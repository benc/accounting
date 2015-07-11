var ExpensesListPage = require('../pages/expenses_list_page.js');

describe('expenses list', function() {
  it('should list all the expenses', function() {
    var page = new ExpensesListPage();
    expect(page.list.count()).toBeGreaterThan(0);
  });
});