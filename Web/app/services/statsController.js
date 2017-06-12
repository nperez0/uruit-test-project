var TestApp;
(function (TestApp) {
    var Services;
    (function (Services) {
        var StatsService = (function () {
            function StatsService($http, $q, apiBaseUrl) {
                this.$http = $http;
                this.$q = $q;
                this.apiBaseUrl = apiBaseUrl;
            }
            StatsService.prototype.get = function () {
                var defer = this.$q.defer();
                this.$http.get(this.apiBaseUrl + '/stats')
                    .success(function (result) {
                    var mapped = result.map(function (r) { return TestApp.Utilities.Mapper.map(r, TestApp.Models.Stat); });
                    defer.resolve(mapped);
                });
                return defer.promise;
            };
            StatsService.$inject = ["$http", "$q", "apiBaseUrl"];
            return StatsService;
        }());
        Services.StatsService = StatsService;
        angular.module(TestApp.Constants.ApplicationName).service(TestApp.Constants.Services.StatsService, StatsService);
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
