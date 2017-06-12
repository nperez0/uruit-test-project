var TestApp;
(function (TestApp) {
    var app = angular.module(TestApp.Constants.ApplicationName);
    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/play');
            $stateProvider
                .state('app', {
                abstract: true,
                url: '',
                templateUrl: TestApp.Constants.Views.Views.Layout
            })
                .state('app.game', {
                abstract: true,
                url: '/play',
                controller: TestApp.Constants.Controllers.GameController,
                controllerAs: 'vm',
                templateUrl: TestApp.Constants.Views.Views.Game,
                resolve: {
                    rules: [
                        TestApp.Constants.Services.RulesService,
                        function (rulesService) {
                            return rulesService.get().then(function (data) { return data; });
                        }
                    ]
                }
            })
                .state('app.game.start', {
                url: '',
                templateUrl: TestApp.Constants.Views.Views.Start
            })
                .state('app.game.move', {
                url: '/round',
                templateUrl: TestApp.Constants.Views.Views.Move
            })
                .state('app.game.winner', {
                url: '/winner',
                templateUrl: TestApp.Constants.Views.Views.Winner
            })
                .state('app.stats', {
                url: '/stats',
                controller: TestApp.Constants.Controllers.StatsController,
                controllerAs: 'vm',
                templateUrl: TestApp.Constants.Views.Views.Stats
            })
                .state('app.rules', {
                url: '/moves',
                controller: TestApp.Constants.Controllers.RulesController,
                controllerAs: 'vm',
                templateUrl: TestApp.Constants.Views.Views.Rules
            });
        }]);
})(TestApp || (TestApp = {}));
//# sourceMappingURL=config.router.js.map