(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./CollectionFormatter", "./AccessorFormatter", "./AccessoireFormatter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var CollectionFormatter_1 = require("./CollectionFormatter");
    var AccessorFormatter_1 = require("./AccessorFormatter");
    var AccessoireFormatter_1 = require("./AccessoireFormatter");
    var installed = false;
    function installDevtools() {
        if (typeof window === "undefined") {
            throw new Error("Can only install immutable-devtools in a browser environment.");
        }
        if (installed === true) {
            return;
        }
        var devtoolsFormatters = window.devtoolsFormatters = window.devtoolsFormatters || [];
        devtoolsFormatters.push(new CollectionFormatter_1.default(), new AccessorFormatter_1.default(), new AccessoireFormatter_1.default());
        installed = true;
    }
    exports.installDevtools = installDevtools;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = installDevtools;
});
//# sourceMappingURL=index.js.map