module TestApp.Utilities {
    export interface IMapping<T> {
        (dest: T): void;
    }

    export interface IKeyValue<T1, T2> {
        key: T1;
        value: T2;
    }

    export class Mapper {
        public static map<TDestination>(src: any, dest: any,
            supressWarningForDestMappings: Array<IMapping<TDestination>> = []): TDestination {
            const ignoreDestParams: Array<string> = [];
            for (let ignoreDestinationMapping of supressWarningForDestMappings) {
                ignoreDestParams.push(<any>ignoreDestinationMapping.toString().match("\\.(\\w+)")[1]);
            }


            var destProto = (<any>dest).prototype;
            var ctorOneLine = destProto.constructor.toString().replace(/(\r\n|\n|\r)/gm, "");
            var paramKeys = ctorOneLine.match('\\((.+?)\\)')[1].split(",").map(p => p.trim());

            if (destProto.constructor.inject) {
                paramKeys = destProto.constructor.inject;
            }

            const ctorParamValues: Array<string> = [];

            for (var key of paramKeys) {
                if (typeof (src[key]) == 'function') continue;

                const sourceCorrespondingValue = this.getCorrespondingValue(src, key);
                if (sourceCorrespondingValue !== undefined) {
                    ctorParamValues.push(sourceCorrespondingValue);
                } else {
                    ctorParamValues.push(undefined);
                    if (!ignoreDestParams.some(p => p === key)) {
                        console.warn(`Mapper Warning: destination field: ${key} not found on source object`);
                    }

                }
            }

            //TODO: output object is Object however instance of works correctly
            const outputObject = <TDestination>Object.create(destProto);
            destProto.constructor.apply(outputObject, ctorParamValues);
            return outputObject;
        }

        private static getCorrespondingValue(input: any, key: string) {
            var value = input[key];
            if (value) return value;
            for (let inputKey in input) {
                if (key.toLowerCase() === inputKey.toLowerCase()) {
                    return input[inputKey];
                }
            }
            return undefined;
        }
    }
}