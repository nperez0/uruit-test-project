module TestApp {
    var app = angular.module(Constants.ApplicationName);

    app.config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

            $urlRouterProvider.otherwise('/play');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '',
                    templateUrl: Constants.Views.Views.Layout
                })
                .state('app.game', {
                    abstract: true,
                    url: '/play',
                    controller: Constants.Controllers.GameController,
                    controllerAs: 'vm',
                    templateUrl: Constants.Views.Views.Game,
                    resolve: {
                        rules: [
                            Constants.Services.RulesService,
                            (rulesService: Services.RulesService) => {
                                return rulesService.get().then(data => data);
                            }
                        ]
                    }
                })
                .state('app.game.start', {
                    url: '',
                    templateUrl: Constants.Views.Views.Start
                })
                .state('app.game.move', {
                    url: '/round',
                    templateUrl: Constants.Views.Views.Move
                })
                .state('app.game.winner', {
                    url: '/winner',
                    templateUrl: Constants.Views.Views.Winner
                })
                .state('app.stats', {
                    url: '/stats',
                    controller: Constants.Controllers.StatsController,
                    controllerAs: 'vm',
                    templateUrl: Constants.Views.Views.Stats
                })
                .state('app.rules', {
                    url: '/moves',
                    controller: Constants.Controllers.RulesController,
                    controllerAs: 'vm',
                    templateUrl: Constants.Views.Views.Rules
                });
        }]);
}