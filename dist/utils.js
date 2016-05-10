(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./styles"], factory);
    }
})(function (require, exports) {
    "use strict";
    var styles_1 = require("./styles");
    function className(object) {
        var declaredClass = object.declaredClass;
        if (!declaredClass) {
            return null;
        }
        var lastIndexOfPoint = declaredClass.lastIndexOf(".");
        var indexOfAngleBracket = declaredClass.indexOf("<");
        if (indexOfAngleBracket > -1) {
            lastIndexOfPoint = declaredClass.lastIndexOf(".", indexOfAngleBracket);
        }
        return declaredClass.substring(lastIndexOfPoint + 1, declaredClass.length);
    }
    exports.className = className;
    function reference(object, config) {
        if (typeof object === "undefined") {
            return ["span", ["span", styles_1.keyStyle, ("  " + config.propertyName + ": ")], ["span", styles_1.nullStyle, "undefined"]];
        }
        else if (object === "null") {
            return ["span", ["span", styles_1.keyStyle, ("  " + config.propertyName + ": ")], ["span", styles_1.nullStyle, "null"]];
        }
        if (object && (object.__accessor__ || object._accessorProps)) {
            return ["object", { object: object, config: config }];
        }
        return ["span", ["span", styles_1.keyStyle, ("  " + config.propertyName + ": ")], ["object", { object: object, config: config }]];
    }
    exports.reference = reference;
    ;
    function propertyNames(object) {
        return object._accessorProps ?
            Object.keys(object.constructor._esriMeta.classMetadata.properties).sort() :
            Object.keys(object.__accessor__.metadatas).sort();
    }
    exports.propertyNames = propertyNames;
});
//# sourceMappingURL=utils.js.map