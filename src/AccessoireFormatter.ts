import { Formatter, HTMLTemplate, config } from "./interfaces";
import { classNameStyle, keyStyle, listStyle } from "./styles";
import { className, reference, propertyNames } from "./utils";

export default class AccessoireFormatter implements Formatter {

  accept(object: any): boolean {
    return object && object._accessorProps != null;
  }

  preview(object: any): any {
    return className(object);
  }

  hasChildren(object: any): boolean {
    return propertyNames(object).length > 0;
  }

  children(object: any): { name: string, value: any }[] {
    let result: { name: string, value: any }[] = [];
    let names: string[] = propertyNames(object);
    for (let name of names) {
      result.push({
        name: name,
        value: object[name]
      });
    }
    return result;
  }

}
