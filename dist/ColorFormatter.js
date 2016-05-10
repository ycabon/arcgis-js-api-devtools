(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./JSONMLElement"], factory);
    }
})(function (require, exports) {
    "use strict";
    var JSONMLElement_1 = require("./JSONMLElement");
    var AccessorFormatter = (function () {
        function AccessorFormatter() {
        }
        AccessorFormatter.prototype.accept = function (object) {
            return object && typeof object.toRgba === "function";
        };
        AccessorFormatter.prototype.preview = function (object) {
            var element = new JSONMLElement_1.default("span");
            var _a = object.toRgba(), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
            element.createChild("span").createTextChild("[" + r + ", " + g + ", " + b + ", " + a + "]").setStyle("float: right");
            element.createChild("div").setStyle("float: right; width: 10px; height: 10px; margin-top: 3px; margin-right: 4px; border: 1px solid black; background: " + object);
            return element;
        };
        AccessorFormatter.prototype.hasChildren = function (object) {
            return false;
        };
        AccessorFormatter.prototype.children = function (object) {
            return null;
        };
        return AccessorFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AccessorFormatter;
});
//# sourceMappingURL=ColorFormatter.js.map