ExpensesListPage = function () {
  browser.get("/expenses");
};

ExpensesListPage.prototype = Object.create({}, {
  list: {
    get: function () {
      return element.all(by.css('div.expense'));
    }
  }
});

module.exports = ExpensesListPage;