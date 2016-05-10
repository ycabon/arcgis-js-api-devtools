(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./JSONMLElement", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    var JSONMLElement_1 = require("./JSONMLElement");
    var utils_1 = require("./utils");
    var AccessoireFormatter = (function () {
        function AccessoireFormatter() {
        }
        AccessoireFormatter.prototype.accept = function (object) {
            return object && object._accessorProps != null;
        };
        AccessoireFormatter.prototype.preview = function (object) {
            var element = new JSONMLElement_1.default("span");
            element.createChild("span").createTextChild(utils_1.className(object));
            return element;
        };
        AccessoireFormatter.prototype.hasChildren = function (object) {
            return utils_1.propertyNames(object).length > 0;
        };
        AccessoireFormatter.prototype.children = function (object) {
            var result = [];
            var names = utils_1.propertyNames(object);
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                result.push({
                    name: name_1,
                    value: object[name_1]
                });
            }
            return result;
        };
        return AccessoireFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AccessoireFormatter;
});
//# sourceMappingURL=AccessoireFormatter.js.map