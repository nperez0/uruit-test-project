module TestApp.Controllers {
    export class RulesController {

        public rules: Array<Models.Rule>;

        public move: string;
        public kills: string;

        static $inject = [Constants.Services.RulesService];
        constructor(
            public rulesService: Services.RulesService
        ) {
            this.load();
        }

        private load() {
            this.rulesService
                .get()
                .then(data => this.rules = data);
        }

        public add() {
            this.rulesService
                .new(this.move, this.kills)
                .then(() => {
                    this.move = '';
                    this.kills = '';

                    this.load()
                });
        }

        public remove(rule: Models.Rule) {
            this.rulesService
                .remove(rule)
                .then(() => this.load());
        }
    }
    angular.module(Constants.ApplicationName).controller(Constants.Controllers.RulesController, RulesController);
}
