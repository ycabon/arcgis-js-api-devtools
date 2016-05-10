(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.listStyle = { style: "list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal" };
    exports.classNameStyle = { style: "color: black" };
    exports.keyStyle = { style: "color: #881391" };
    exports.nullStyle = { style: "color: #777" };
});
//# sourceMappingURL=styles.js.map