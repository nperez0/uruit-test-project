var TestApp;
(function (TestApp) {
    var Models;
    (function (Models) {
        var Round = (function () {
            function Round(number, winner) {
                this.number = number;
                this.winner = winner;
            }
            return Round;
        }());
        Models.Round = Round;
    })(Models = TestApp.Models || (TestApp.Models = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=round.js.map