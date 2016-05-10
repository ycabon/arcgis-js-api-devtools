(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./CollectionFormatter", "./ColorFormatter", "./AccessorFormatter", "./AccessoireFormatter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var CollectionFormatter_1 = require("./CollectionFormatter");
    var ColorFormatter_1 = require("./ColorFormatter");
    var AccessorFormatter_1 = require("./AccessorFormatter");
    var AccessoireFormatter_1 = require("./AccessoireFormatter");
    var ArcGISJSAPIFormatter = (function () {
        function ArcGISJSAPIFormatter() {
            this._formatters = [new CollectionFormatter_1.default(), new ColorFormatter_1.default(), new AccessorFormatter_1.default(), new AccessoireFormatter_1.default()];
        }
        ArcGISJSAPIFormatter.prototype.accept = function (object) {
            for (var _i = 0, _a = this._formatters; _i < _a.length; _i++) {
                var formatter = _a[_i];
                if (formatter.accept(object)) {
                    return true;
                }
            }
        };
        ArcGISJSAPIFormatter.prototype.preview = function (object) {
            for (var _i = 0, _a = this._formatters; _i < _a.length; _i++) {
                var formatter = _a[_i];
                if (formatter.accept(object)) {
                    return formatter.preview(object);
                }
            }
            return null;
        };
        ArcGISJSAPIFormatter.prototype.hasChildren = function (object) {
            for (var _i = 0, _a = this._formatters; _i < _a.length; _i++) {
                var formatter = _a[_i];
                if (formatter.accept(object)) {
                    return formatter.hasChildren(object);
                }
            }
            return false;
        };
        ArcGISJSAPIFormatter.prototype.children = function (object) {
            if (!object) {
                return [];
            }
            for (var _i = 0, _a = this._formatters; _i < _a.length; _i++) {
                var formatter = _a[_i];
                if (formatter.accept(object)) {
                    return formatter.children(object);
                }
            }
            return [];
        };
        return ArcGISJSAPIFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ArcGISJSAPIFormatter;
});
//# sourceMappingURL=ArcGISJSAPIFormatter.js.map