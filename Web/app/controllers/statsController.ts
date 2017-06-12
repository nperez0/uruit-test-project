module TestApp.Controllers {
    export class StatsController {

        public stats: Array<Models.Stat>;

        static $inject = [Constants.Services.StatsService];
        constructor(
            public statsService: Services.StatsService
        ) {
            this.statsService
                .get()
                .then(data => this.stats = data);
        }
    }
    angular.module(Constants.ApplicationName).controller(Constants.Controllers.StatsController, StatsController);
}
