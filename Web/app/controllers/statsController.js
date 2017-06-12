var TestApp;
(function (TestApp) {
    var Controllers;
    (function (Controllers) {
        var StatsController = (function () {
            function StatsController(statsService) {
                var _this = this;
                this.statsService = statsService;
                this.statsService
                    .get()
                    .then(function (data) { return _this.stats = data; });
            }
            StatsController.$inject = [TestApp.Constants.Services.StatsService];
            return StatsController;
        }());
        Controllers.StatsController = StatsController;
        angular.module(TestApp.Constants.ApplicationName).controller(TestApp.Constants.Controllers.StatsController, StatsController);
    })(Controllers = TestApp.Controllers || (TestApp.Controllers = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=statsController.js.map