module TestApp.Controllers {
    export class GameController {

        public game: Models.Game;

        static $inject = ["$state", "rules", Constants.Services.GamesService];
        constructor(
            private state: ng.ui.IStateService,
            public rules: Array<Models.Rule>,
            public gamesService: Services.GamesService
        ) {
            this.game = new Models.Game(rules);
        }

        public start() {
            this.state.go('app.game.move');
        }

        public move() {
            if (this.game.move()) {
                this.gamesService.new(this.game.winner.name);

                this.state.go('app.game.winner');
            }
        }

        public playAgain() {
            this.game = new Models.Game(this.rules);

            this.state.go('app.game.start');
        }
    }
    angular.module(Constants.ApplicationName).controller(Constants.Controllers.GameController, GameController);
}
