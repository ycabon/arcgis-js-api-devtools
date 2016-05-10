(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var JSONMLElement = (function () {
        function JSONMLElement(tagName) {
            this._attributes = {};
            this._jsonML = [tagName, this._attributes];
        }
        JSONMLElement.prototype.appendChild = function (element) {
            this._jsonML.push(element.toJSONML());
            return element;
        };
        JSONMLElement.prototype.createChild = function (tagName) {
            return this.appendChild(new JSONMLElement(tagName));
        };
        JSONMLElement.prototype.createObjectTag = function (object) {
            var tag = this.createChild("object");
            tag.addAttribute("object", object);
            return tag;
        };
        JSONMLElement.prototype.setStyle = function (style) {
            this._attributes["style"] = style;
            return this;
        };
        JSONMLElement.prototype.addAttribute = function (key, value) {
            this._attributes[key] = value;
            return this;
        };
        JSONMLElement.prototype.createTextChild = function (text) {
            this._jsonML.push(text + "");
            return this;
        };
        JSONMLElement.prototype.toJSONML = function () {
            return this._jsonML;
        };
        return JSONMLElement;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = JSONMLElement;
});
//# sourceMappingURL=JSONMLElement.js.map