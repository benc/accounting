ExpensesListPage = function () {
  browser.get("/expenses");
};

ExpensesListPage.prototype = Object.create({}, {
  list: {
    get: function () {
      return element.all(by.css('.expense'));
    }
  }
});

module.exports = ExpensesListPage;
