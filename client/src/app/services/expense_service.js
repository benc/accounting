var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var ExpenseService = (function () {
    function ExpenseService(http) {
        this.http = http;
        this.http = http;
    }
    ExpenseService.prototype.all = function () {
        return this.http.get('http://localhost:3000/api/expense').toRx();
    };
    ExpenseService.prototype.get = function (id) {
        return this.http.get("http://localhost:3000/api/invoice/" + id).toRx();
    };
    ExpenseService.prototype.create = function (expense) {
        return this.http.post('http://localhost:3000/api/invoice', JSON.stringify(expense)).toRx();
    };
    ExpenseService.prototype.update = function (expense) {
        return this.http.put("http://localhost:3000/api/invoice/" + expense.id, JSON.stringify(expense)).toRx();
    };
    ExpenseService.prototype.delete = function (expense) {
        return this.http.delete("http://localhost:3000/api/invoice/" + expense.id).toRx();
    };
    ExpenseService = __decorate([
        __param(0, angular2_1.Inject(angular2_1.Http))
    ], ExpenseService);
    return ExpenseService;
})();
exports.ExpenseService = ExpenseService;
exports.expenseInjectables = [
    angular2_1.bind(ExpenseService).toClass(ExpenseService)
];
//# sourceMappingURL=expense_service.js.map