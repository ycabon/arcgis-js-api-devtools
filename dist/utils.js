(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
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
    function propertyNames(object) {
        return object._accessorProps ?
            Object.keys(object.constructor._esriMeta.classMetadata.properties).sort() :
            Object.keys(object.__accessor__.metadatas).sort();
    }
    exports.propertyNames = propertyNames;
});
//# sourceMappingURL=utils.js.map