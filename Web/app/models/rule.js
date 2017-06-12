var TestApp;
(function (TestApp) {
    var Models;
    (function (Models) {
        var Rule = (function () {
            function Rule(id, move, kills) {
                this.id = id;
                this.move = move;
                this.kills = kills;
            }
            return Rule;
        }());
        Models.Rule = Rule;
    })(Models = TestApp.Models || (TestApp.Models = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=rule.js.map