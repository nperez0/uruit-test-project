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
            GamesService.prototype.new = function (winner) {
                this.$http.post(this.apiBaseUrl + '/games', { winner: winner });
            };
            GamesService.$inject = ["$http", "$q", "apiBaseUrl"];
            return GamesService;
        }());
        Services.GamesService = GamesService;
        angular.module(TestApp.Constants.ApplicationName).service(TestApp.Constants.Services.GamesService, GamesService);
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=gamesService.js.map