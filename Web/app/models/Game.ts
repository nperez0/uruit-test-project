module TestApp.Models {
    export class Game {

        public playerOne: Player;
        public playerTwo: Player;

        public currentPlayer: Player;
        public winner: Player;

        public rounds: Array<Round> = [];

        public currentRound: number;

        constructor (
            public rules: Array<Rule>
        )
        {
            this.playerOne = new Player();
            this.playerTwo = new Player();

            this.currentRound = 1;
            this.currentPlayer = this.playerOne;

            this.currentPlayer.move = this.rules[0];
        }

        public move(): boolean {
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

                this.rounds.push(new Round(this.currentRound, winner));
                
                this.currentRound++;
            }

            return !!this.winner;
        }
    }
} 
