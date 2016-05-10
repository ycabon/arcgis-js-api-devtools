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
    var JSONMLFormatter = (function () {
        function JSONMLFormatter(formatter) {
            this._formatter = formatter;
        }
        JSONMLFormatter.prototype.header = function (object, config) {
            if (!this._formatter.accept(object)) {
                return null;
            }
            var child = this._formatter.preview(object);
            if (child === null) {
                return null;
            }
            var preview = config && config.preview;
            var header = new JSONMLElement_1.default("span");
            if (preview) {
                header.appendChild(preview);
            }
            header.createTextChild(child);
            return header.toJSONML();
        };
        JSONMLFormatter.prototype.hasBody = function (object, config) {
            return this._formatter.hasChildren(object);
        };
        JSONMLFormatter.prototype.body = function (object) {
            var formatter = this._formatter;
            var body = new JSONMLElement_1.default("ol");
            body.setStyle("list-style-type:none; padding-left: 0px; margin-top: 0px; margin-bottom: 0px; margin-left: 12px");
            var children = formatter.children(object);
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                var li = body.createChild("li");
                var nameSpan = new JSONMLElement_1.default("span");
                nameSpan.createTextChild(child.name + ": ");
                nameSpan.setStyle("color: rgb(136, 19, 145);");
                if (formatter.accept(child.value)) {
                    var objectTag = li.createObjectTag(child.value);
                    objectTag.addAttribute("config", { preview: nameSpan });
                    if (!formatter.hasChildren(child.value)) {
                        li.setStyle("padding-left: 13px;");
                    }
                }
                else {
                    li.setStyle("padding-left: 13px;");
                    li.appendChild(nameSpan);
                    if (typeof child.value === "string") {
                        li.createTextChild("\"" + child.value + "\"");
                    }
                }
            }
            return body.toJSONML();
        };
        return JSONMLFormatter;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = JSONMLFormatter;
});
//# sourceMappingURL=JSONMLFormatter.js.map