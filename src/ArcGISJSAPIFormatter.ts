import { Formatter } from "./interfaces";

import CollectionFormatter from "./CollectionFormatter";
import AccessorFormatter from "./AccessorFormatter";
import AccessoireFormatter from "./AccessoireFormatter";

export default class ArcGISJSAPIFormatter {

  private _formatters: Formatter[] = [new CollectionFormatter(), new AccessorFormatter(), new AccessoireFormatter()];
  
  accept(object: any) {
    if (typeof object === "undefined") {
      return false;
    }

    if (typeof object === "number") {
      return false;
    }

    if (typeof object === "string") {
      return false;
    }

    if (!object) {
      return false;
    }
    
    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return true;
      }
    }
  }

  preview(object: any) {
    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return formatter.preview(object);
      }
    }

    return null;
  }

  hasChildren(object: any) {
    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return formatter.hasChildren(object);
      }
    }

    return false;
  }

  children(object: any) {
    if (!object)
      return [];

    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return formatter.children(object);
      }
    }
    
    return [];
  }

}
