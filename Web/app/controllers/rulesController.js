var TestApp;
(function (TestApp) {
    var Controllers;
    (function (Controllers) {
        var RulesController = (function () {
            function RulesController(rulesService) {
                this.rulesService = rulesService;
                this.load();
            }
            RulesController.prototype.load = function () {
                var _this = this;
                this.rulesService
                    .get()
                    .then(function (data) { return _this.rules = data; });
            };
            RulesController.prototype.add = function () {
                var _this = this;
                this.rulesService
                    .new(this.move, this.kills)
                    .then(function () {
                    _this.move = '';
                    _this.kills = '';
                    _this.load();
                });
            };
            RulesController.prototype.remove = function (rule) {
                var _this = this;
                this.rulesService
                    .remove(rule)
                    .then(function () { return _this.load(); });
            };
            RulesController.$inject = [TestApp.Constants.Services.RulesService];
            return RulesController;
        }());
        Controllers.RulesController = RulesController;
        angular.module(TestApp.Constants.ApplicationName).controller(TestApp.Constants.Controllers.RulesController, RulesController);
    })(Controllers = TestApp.Controllers || (TestApp.Controllers = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=rulesController.js.map