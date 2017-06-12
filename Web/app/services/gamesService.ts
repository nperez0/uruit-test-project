module TestApp.Services {
    export class GamesService {
        static $inject = ["$http", "$q", "apiBaseUrl"];
        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private apiBaseUrl: string
        ) {

        }

        public new(winner: string) {
            this.$http.post(this.apiBaseUrl + '/games', { winner: winner });
        }
    }
    angular.module(Constants.ApplicationName).service(Constants.Services.GamesService, GamesService);
}