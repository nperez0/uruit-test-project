var TestApp;
(function (TestApp) {
    var Controllers;
    (function (Controllers) {
        var GameController = (function () {
            function GameController(state, rules, gamesService) {
                this.state = state;
                this.rules = rules;
                this.gamesService = gamesService;
                this.game = new TestApp.Models.Game(rules);
            }
            GameController.prototype.start = function () {
                this.state.go('app.game.move');
            };
            GameController.prototype.move = function () {
                if (this.game.move()) {
                    this.gamesService.new(this.game.winner.name);
                    this.state.go('app.game.winner');
                }
            };
            GameController.prototype.playAgain = function () {
                this.game = new TestApp.Models.Game(this.rules);
                this.state.go('app.game.start');
            };
            GameController.$inject = ["$state", "rules", TestApp.Constants.Services.GamesService];
            return GameController;
        }());
        Controllers.GameController = GameController;
        angular.module(TestApp.Constants.ApplicationName).controller(TestApp.Constants.Controllers.GameController, GameController);
    })(Controllers = TestApp.Controllers || (TestApp.Controllers = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=gameController.js.map