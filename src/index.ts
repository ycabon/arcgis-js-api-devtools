import ArcGISJSAPIFormatter from "./ArcGISJSAPIFormatter";
import JSONMLFormatter from "./JSONMLFormatter";

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
  
  devtoolsFormatters.push(new JSONMLFormatter(new ArcGISJSAPIFormatter()));
  
  installed = true;
}

export default installDevtools;