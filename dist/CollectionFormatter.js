(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./utils", './JSONMLElement'], factory);
    }
})(function (require, exports) {
    "use strict";
    var utils_1 = require("./utils");
    var JSONMLElement_1 = require('./JSONMLElement');
    var CollectionFormatter = (function () {
        function CollectionFormatter() {
        }
        CollectionFormatter.prototype.accept = function (object) {
            return object && object.__accessor__ != null && Array.isArray(object._items);
        };
        CollectionFormatter.prototype.preview = function (object) {
            var element = new JSONMLElement_1.default("span");
            element.createChild("span").createTextChild(utils_1.className(object));
            element.createChild("span").createTextChild("[" + object.length + "]");
            return element;
        };
        CollectionFormatter.prototype.hasChildren = function (object) {
            return object.length > 0;
        };
        CollectionFormatter.prototype.children = function (object) {
            var result = [];
            var elements = object.toArray();
            for (var i = 0; i < elements.length; ++i) {
                result.push({ name: i + "", value: elements[i] });
            }
            return result;
        };
        return CollectionFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CollectionFormatter;
});
//# sourceMappingURL=CollectionFormatter.js.map