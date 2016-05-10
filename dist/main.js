(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./ArcGISJSAPIFormatter", "./JSONMLFormatter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ArcGISJSAPIFormatter_1 = require("./ArcGISJSAPIFormatter");
    var JSONMLFormatter_1 = require("./JSONMLFormatter");
    var installed = false;
    function install() {
        if (typeof window === "undefined") {
            throw new Error("Can only install immutable-devtools in a browser environment.");
        }
        if (installed === true) {
            return;
        }
        var devtoolsFormatters = window.devtoolsFormatters = window.devtoolsFormatters || [];
        devtoolsFormatters.push(new JSONMLFormatter_1.default(new ArcGISJSAPIFormatter_1.default()));
        installed = true;
    }
    exports.install = install;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = install;
});
//# sourceMappingURL=main.js.map