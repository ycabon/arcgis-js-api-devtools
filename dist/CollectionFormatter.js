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
    var CollectionFormatter = (function () {
        function CollectionFormatter() {
        }
        CollectionFormatter.prototype.header = function (object, config) {
            if (!object.__accessor__ || !Array.isArray(object._items)) {
                return null;
            }
            return ["span", ["span", styles_1.classNameStyle, utils_1.className(object)], ["span", ("[" + object.length + "]")]];
        };
        CollectionFormatter.prototype.hasBody = function (object, config) {
            return object.length > 0;
        };
        CollectionFormatter.prototype.body = function (object, config) {
            var children = object
                .map(function (child, index) {
                return ["li", {}, utils_1.reference(child)];
            })
                .toArray();
            return ["ol", {}].concat(children);
        };
        return CollectionFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CollectionFormatter;
});
//# sourceMappingURL=CollectionFormatter.js.map