import CollectionFormatter from "./CollectionFormatter";
import AccessorFormatter from "./AccessorFormatter";
import AccessoireFormatter from "./AccessoireFormatter";

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