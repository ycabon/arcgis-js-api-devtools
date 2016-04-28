import { nullStyle, keyStyle } from "./styles";

import { config } from "./interfaces";

export function className(object: any): string {
  let declaredClass = object.declaredClass
  
  if (!declaredClass) {
    return null;
  }
  
  let lastIndexOfPoint = declaredClass.lastIndexOf("."); 
  let indexOfAngleBracket = declaredClass.indexOf("<"); 
  if (indexOfAngleBracket > -1) {
    lastIndexOfPoint = declaredClass.lastIndexOf(".", indexOfAngleBracket);
  }
  
  return declaredClass.substring(lastIndexOfPoint + 1, declaredClass.length);
}

export function reference(object: any, config: config): any  {
  if (typeof object === "undefined") {
    return ["span", ["span", keyStyle, `  ${config.propertyName}: `], ["span", nullStyle, "undefined"]];
  }
  else if (object === "null") {
    return ["span", ["span", keyStyle, `  ${config.propertyName}: `], ["span", nullStyle, "null"]];
  }
  
  if (object && (object.__accessor__ || object._accessorProps)) {
    return ["object", {object, config}];
  }
  
  return ["span", ["span", keyStyle, `  ${config.propertyName}: `], ["object", {object, config}]];
};

export function propertyNames(object: any): string[] {
  return object._accessorProps ? 
    Object.keys(object.constructor._esriMeta.classMetadata.properties).sort() :
    Object.keys(object.__accessor__.metadatas).sort();
}
