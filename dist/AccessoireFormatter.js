(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./styles", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    var styles_1 = require("./styles");
    var utils_1 = require("./utils");
    var AccessoireFormatter = (function () {
        function AccessoireFormatter() {
        }
        AccessoireFormatter.prototype.header = function (object, config) {
            if (!object._accessorProps) {
                return null;
            }
            return ["span", styles_1.classNameStyle, utils_1.className(object)];
        };
        AccessoireFormatter.prototype.hasBody = function (object, config) {
            return utils_1.propertyNames(object).length > 0;
        };
        AccessoireFormatter.prototype.body = function (object, config) {
            var children = utils_1.propertyNames(object)
                .map(function (key) {
                return ["li", ["span", styles_1.defaultValueKeyStyle, key + ": "], utils_1.reference(object[key])];
            });
            return ["ol", styles_1.listStyle].concat(children);
        };
        return AccessoireFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AccessoireFormatter;
});
//# sourceMappingURL=AccessoireFormatter.js.map