module TestApp {
    export class Constants {
        static ApplicationName: string = 'TestApp';
        static ApiBaseUrl: string = '//localhost:43570/api';
        static Controllers = {
            RulesController: 'TestApp.Controllers.RulesController',
            GameController: 'TestApp.Controllers.GameController',
            StatsController: 'TestApp.Controllers.StatsController',
        };
        static Services = {
            RulesService: 'TestApp.Services.RulesService',
            GamesService: 'TestApp.Services.GamesService',
            StatsService: 'TestApp.Services.StatsService'
        };
        static Views = {
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
    }
}