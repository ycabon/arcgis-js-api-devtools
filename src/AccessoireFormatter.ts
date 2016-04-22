import { Formatter, HTMLTemplate } from "./interfaces";
import { classNameStyle, defaultValueKeyStyle, listStyle } from "./styles";
import { className, reference, propertyNames } from "./utils";

export default class AccessoireFormatter implements Formatter {
  header(object: any, config: any): HTMLTemplate {
    if (!object._accessorProps) {
      return null;
    }
    
    return ["span", classNameStyle, className(object)];
  }
  hasBody(object: any, config: any): boolean {
    return propertyNames(object).length > 0;  
  }
  body(object: any, config: any): HTMLTemplate {
    let children = propertyNames(object)
      .map((key: string) => {
        return ["li", ["span", defaultValueKeyStyle, key + ": "], reference(object[key])];
      });
    return [ "ol", listStyle, ...children ];
  }
}