var TestApp;
(function (TestApp) {
    var Services;
    (function (Services) {
        var GamesService = (function () {
            function GamesService($http, $q, apiBaseUrl) {
                this.$http = $http;
                this.$q = $q;
                this.apiBaseUrl = apiBaseUrl;
            }
            GamesService.prototype.get = function () {
                var defer = this.$q.defer();
                this.$http.get(this.apiBaseUrl + '/rules')
                    .success(function (result) {
                    var mapped = result.map(function (r) { return TestApp.Utilities.Mapper.map(r, TestApp.Models.Rule); });
                    defer.resolve(mapped);
                });
                return defer.promise;
            };
            GamesService.$inject = ["$http", "$q", "apiBaseUrl"];
            return GamesService;
        }());
        Services.GamesService = GamesService;
        angular.module(TestApp.Constants.ApplicationName).service(TestApp.Constants.Services.RulesService, Services.RulesService);
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
