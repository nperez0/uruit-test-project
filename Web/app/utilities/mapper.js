var TestApp;
(function (TestApp) {
    var Utilities;
    (function (Utilities) {
        var Mapper = (function () {
            function Mapper() {
            }
            Mapper.map = function (src, dest, supressWarningForDestMappings) {
                if (supressWarningForDestMappings === void 0) { supressWarningForDestMappings = []; }
                var ignoreDestParams = [];
                for (var _i = 0, supressWarningForDestMappings_1 = supressWarningForDestMappings; _i < supressWarningForDestMappings_1.length; _i++) {
                    var ignoreDestinationMapping = supressWarningForDestMappings_1[_i];
                    ignoreDestParams.push(ignoreDestinationMapping.toString().match("\\.(\\w+)")[1]);
                }
                var destProto = dest.prototype;
                var ctorOneLine = destProto.constructor.toString().replace(/(\r\n|\n|\r)/gm, "");
                var paramKeys = ctorOneLine.match('\\((.+?)\\)')[1].split(",").map(function (p) { return p.trim(); });
                if (destProto.constructor.inject) {
                    paramKeys = destProto.constructor.inject;
                }
                var ctorParamValues = [];
                for (var _a = 0, paramKeys_1 = paramKeys; _a < paramKeys_1.length; _a++) {
                    var key = paramKeys_1[_a];
                    if (typeof (src[key]) == 'function')
                        continue;
                    var sourceCorrespondingValue = this.getCorrespondingValue(src, key);
                    if (sourceCorrespondingValue !== undefined) {
                        ctorParamValues.push(sourceCorrespondingValue);
                    }
                    else {
                        ctorParamValues.push(undefined);
                        if (!ignoreDestParams.some(function (p) { return p === key; })) {
                            console.warn("Mapper Warning: destination field: " + key + " not found on source object");
                        }
                    }
                }
                //TODO: output object is Object however instance of works correctly
                var outputObject = Object.create(destProto);
                destProto.constructor.apply(outputObject, ctorParamValues);
                return outputObject;
            };
            Mapper.getCorrespondingValue = function (input, key) {
                var value = input[key];
                if (value)
                    return value;
                for (var inputKey in input) {
                    if (key.toLowerCase() === inputKey.toLowerCase()) {
                        return input[inputKey];
                    }
                }
                return undefined;
            };
            return Mapper;
        }());
        Utilities.Mapper = Mapper;
    })(Utilities = TestApp.Utilities || (TestApp.Utilities = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=mapper.js.map