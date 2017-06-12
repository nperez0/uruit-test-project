var TestApp;
(function (TestApp) {
    var Models;
    (function (Models) {
        var Stat = (function () {
            function Stat(name, wins) {
                this.name = name;
                this.wins = wins;
            }
            return Stat;
        }());
        Models.Stat = Stat;
    })(Models = TestApp.Models || (TestApp.Models = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=stat.js.map