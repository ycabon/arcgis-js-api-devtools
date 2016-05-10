(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.classNameStyle = "color: rgb(232,98,0)";
    exports.keyStyle = "color: #881391";
    exports.nullStyle = "color: #777";
});
//# sourceMappingURL=styles.js.map