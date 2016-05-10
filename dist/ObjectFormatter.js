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
    var ObjectFormatter = (function () {
        function ObjectFormatter() {
        }
        ObjectFormatter.prototype.header = function (object, config) {
            if (!object) {
                return null;
            }
            if (config) {
                if (this.hasBody(object, config)) {
                    return ["span", ["span", styles_1.keyStyle, (config.propertyName + ": ")], ["span", styles_1.classNameStyle, "Object"]];
                }
                else {
                    return ["span", ["span", styles_1.keyStyle, ("  " + config.propertyName + ": ")], ["span", styles_1.classNameStyle, "Object"]];
                }
            }
            return ["span", ["span", styles_1.classNameStyle, utils_1.className(object)], ["span", ("[" + object.length + "]")]];
        };
        ObjectFormatter.prototype.hasBody = function (object, config) {
            return Object.keys(object).length > 0;
        };
        ObjectFormatter.prototype.body = function (object, config) {
            var children = Object.keys(object)
                .map(function (key) {
                return ["li", utils_1.reference(object[key], { propertyName: key })];
            });
            return ["ol", styles_1.listStyle].concat(children);
        };
        return ObjectFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ObjectFormatter;
});
//# sourceMappingURL=ObjectFormatter.js.map