var TestApp;
(function (TestApp) {
    var Models;
    (function (Models) {
        var Game = (function () {
            function Game(rules) {
                this.rules = rules;
                this.rounds = [];
                this.playerOne = new Models.Player();
                this.playerTwo = new Models.Player();
                this.currentRound = 1;
                this.currentPlayer = this.playerOne;
                this.currentPlayer.move = this.rules[0];
            }
            Game.prototype.move = function () {
                if (this.currentPlayer == this.playerOne) {
                    this.currentPlayer = this.playerTwo;
                    this.currentPlayer.move = this.rules[0];
                }
                else {
                    var winner = null;
                    if (this.playerOne.move.kills == this.playerTwo.move.move) {
                        winner = this.playerOne;
                        this.playerOne.wins++;
                    }
                    else if (this.playerTwo.move.kills == this.playerOne.move.move) {
                        winner = this.playerTwo;
                        this.playerTwo.wins++;
                    }
                    if (this.playerOne.wins == 3)
                        this.winner = this.playerOne;
                    if (this.playerTwo.wins == 3)
                        this.winner = this.playerTwo;
                    this.currentPlayer = this.playerOne;
                    this.currentPlayer.move = this.rules[0];
                    this.rounds.push(new Models.Round(this.currentRound, winner));
                    this.currentRound++;
                }
                return !!this.winner;
            };
            return Game;
        }());
        Models.Game = Game;
    })(Models = TestApp.Models || (TestApp.Models = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=game.js.map