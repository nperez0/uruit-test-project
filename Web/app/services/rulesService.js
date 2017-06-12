var TestApp;
(function (TestApp) {
    var Services;
    (function (Services) {
        var RulesService = (function () {
            function RulesService($http, $q, apiBaseUrl) {
                this.$http = $http;
                this.$q = $q;
                this.apiBaseUrl = apiBaseUrl;
            }
            RulesService.prototype.get = function () {
                var defer = this.$q.defer();
                this.$http.get(this.apiBaseUrl + '/rules')
                    .success(function (result) {
                    var mapped = result.map(function (r) { return TestApp.Utilities.Mapper.map(r, TestApp.Models.Rule); });
                    defer.resolve(mapped);
                });
                return defer.promise;
            };
            RulesService.prototype.new = function (move, kills) {
                return this.$http.post(this.apiBaseUrl + '/rules/', { move: move, kills: kills });
            };
            RulesService.prototype.remove = function (rule) {
                return this.$http.delete(this.apiBaseUrl + '/rules/' + rule.id);
            };
            RulesService.$inject = ["$http", "$q", "apiBaseUrl"];
            return RulesService;
        }());
        Services.RulesService = RulesService;
        angular.module(TestApp.Constants.ApplicationName).service(TestApp.Constants.Services.RulesService, RulesService);
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=rulesService.js.map