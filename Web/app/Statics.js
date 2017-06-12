var TestApp;
(function (TestApp) {
    var Constants = (function () {
        function Constants() {
        }
        Constants.ApplicationName = 'TestApp';
        Constants.ApiBaseUrl = '//localhost:43570/api';
        Constants.Controllers = {
            RulesController: 'TestApp.Controllers.RulesController',
            GameController: 'TestApp.Controllers.GameController',
            StatsController: 'TestApp.Controllers.StatsController',
        };
        Constants.Services = {
            RulesService: 'TestApp.Services.RulesService',
            GamesService: 'TestApp.Services.GamesService',
            StatsService: 'TestApp.Services.StatsService'
        };
        Constants.Views = {
            Views: {
                Layout: 'views/layout.html',
                Game: 'views/game.html',
                Start: 'views/start.html',
                Move: 'views/move.html',
                Winner: 'views/winner.html',
                Stats: 'views/stats.html',
                Rules: 'views/rules.html'
            }
        };
        return Constants;
    }());
    TestApp.Constants = Constants;
})(TestApp || (TestApp = {}));
//# sourceMappingURL=statics.js.map