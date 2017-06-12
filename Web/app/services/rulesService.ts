module TestApp.Services {
    export class RulesService {
        static $inject = ["$http", "$q", "apiBaseUrl"];
        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private apiBaseUrl: string
        ) {

        }

        public get(): ng.IPromise<Array<Models.Rule>> {
            var defer = this.$q.defer<Array<Models.Rule>>();

            this.$http.get<Array<Models.Rule>>(this.apiBaseUrl + '/rules')
                .success(result => {
                    var mapped = result.map(r => Utilities.Mapper.map<Models.Rule>(r, Models.Rule));

                    defer.resolve(mapped);
                });
            return defer.promise;
        }

        public new(move: string, kills: string): ng.IHttpPromise<{}> {
            return this.$http.post(this.apiBaseUrl + '/rules/', { move: move, kills: kills });
        }

        public remove(rule: Models.Rule): ng.IHttpPromise<{}> {
            return this.$http.delete(this.apiBaseUrl + '/rules/' + rule.id);
        }
    }
    angular.module(Constants.ApplicationName).service(Constants.Services.RulesService, RulesService);
}