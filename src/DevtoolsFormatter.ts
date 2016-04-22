
// https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
// type tagName = "div" | "span" | "ol" | "li" | "table" | "tr" | "td";
type style = { style: string };
// type child = [ tagName, style, string ] | [ "object", { "object": any, "config": any} ];
type HTMLTemplate = any[];

interface Formatter {
  header(object: any, config: any): HTMLTemplate;
  hasBody(object: any, config: any): boolean;
  body(object: any, config: any): HTMLTemplate;
}

const listStyle: style = {style: "list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal"};
const classNameStyle: style = {style: "color: rgb(232,98,0)"};
const keyStyle: style = {style: "color: #881391"};
const defaultValueKeyStyle: style = {style: "color: #777"};
const alteredValueKeyStyle: style = {style: "color: #881391; font-weight: bolder"};
const inlineValuesStyle: style = {style: "color: #777; font-style: italic"}
const nullStyle: style = {style: "color: #777"};

function renderClassName(object: any): string {
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

function reference(object: any, config?: any): any  {
  if (typeof object === "undefined") {
    return ["span", nullStyle, "undefined"];
  }
  else if (object === "null") {
    return ["span", nullStyle, "null"];
  }

  return ["object", {object, config}];
};

function getPropertyNames(object: any): string[] {
  return object._accessorProps ? 
    Object.keys(object.constructor._esriMeta.classMetadata.properties) :
    Object.keys(object.__accessor__.metadatas);
}

class CollectionFormatter implements Formatter {
  header(object: any, config: any): HTMLTemplate {
    if (!object.__accessor__ || !Array.isArray(object._items)) {
      return null;
    }
    
    return ["span", ["span", classNameStyle, renderClassName(object)], ["span", `[${object.length}]`]];
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

class AccessorFormatter implements Formatter {
  header(object: any, config: any): HTMLTemplate {
    if (!object.__accessor__) {
      return null;
    }
    
    return ["span", classNameStyle, renderClassName(object)];
  }
  hasBody(object: any, config: any): boolean {
    return getPropertyNames(object).length > 0;  
  }
  body(object: any, config: any): HTMLTemplate {
    let children = getPropertyNames(object)
      .map((key: string) => {
        return ["li", ["span", defaultValueKeyStyle, key + ": "], reference(object[key])];
      });
    return [ "ol", listStyle, ...children ];
  }
}

class AccessoireFormatter implements Formatter {
  header(object: any, config: any): HTMLTemplate {
    if (!object._accessorProps) {
      return null;
    }
    
    return ["span", classNameStyle, renderClassName(object)];
  }
  hasBody(object: any, config: any): boolean {
    return getPropertyNames(object).length > 0;  
  }
  body(object: any, config: any): HTMLTemplate {
    let children = getPropertyNames(object)
      .map((key: string) => {
        return ["li", ["span", defaultValueKeyStyle, key + ": "], reference(object[key])];
      });
    return [ "ol", listStyle, ...children ];
  }
}

let installed = false;

export function installDevtools() {
  if (typeof window === "undefined") {
    throw new Error("Can only install immutable-devtools in a browser environment.");
  }

  // Don't install more than once.
  if (installed === true) {
    return;
  }
  
  var devtoolsFormatters = (window as any).devtoolsFormatters = (window as any).devtoolsFormatters || [];
  
  devtoolsFormatters.push(new CollectionFormatter(), new AccessorFormatter(), new AccessoireFormatter());
  
  installed = true;
}

export default installDevtools;