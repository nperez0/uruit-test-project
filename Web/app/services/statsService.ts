module TestApp.Services {
    export class StatsService {
        static $inject = ["$http", "$q", "apiBaseUrl"];
        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private apiBaseUrl: string
        ) {

        }

        public get(): ng.IPromise<Array<Models.Stat>> {
            var defer = this.$q.defer<Array<Models.Stat>>();

            this.$http.get<Array<Models.Stat>>(this.apiBaseUrl + '/stats')
                .success(result => {
                    var mapped = result.map(r => Utilities.Mapper.map<Models.Stat>(r, Models.Stat));

                    defer.resolve(mapped);
                });
            return defer.promise;
        }
    }
    angular.module(Constants.ApplicationName).service(Constants.Services.StatsService, StatsService);
}