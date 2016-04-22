import { nullStyle } from "./styles";

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

export function reference(object: any, config?: any): any  {
  if (typeof object === "undefined") {
    return ["span", nullStyle, "undefined"];
  }
  else if (object === "null") {
    return ["span", nullStyle, "null"];
  }

  return ["object", {object, config}];
};

export function propertyNames(object: any): string[] {
  return object._accessorProps ? 
    Object.keys(object.constructor._esriMeta.classMetadata.properties) :
    Object.keys(object.__accessor__.metadatas);
}
