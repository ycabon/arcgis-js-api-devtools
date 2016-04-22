import { Formatter, HTMLTemplate } from "./interfaces";
import { classNameStyle } from "./styles";
import { className, reference } from "./utils";

export default class CollectionFormatter implements Formatter {
  header(object: any, config: any): HTMLTemplate {
    if (!object.__accessor__ || !Array.isArray(object._items)) {
      return null;
    }
    
    return ["span", ["span", classNameStyle, className(object)], ["span", `[${object.length}]`]];
  }
  hasBody(object: any, config: any): boolean {
    return object.length > 0;
  }
  body(object: any, config: any): HTMLTemplate {
    let children = object
      .map((child: any, index: number) => {
        return ["li", {}, reference(child)];
      })
      .toArray();
    return [ "ol", {}, ...children ];
  }
}
