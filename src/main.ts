import ArcGISJSAPIFormatter from './ArcGISJSAPIFormatter';
import JSONMLFormatter from './JSONMLFormatter';

let installed = false;

export function installArcGISAPIChromeDevtoolsFormatter() {
  if (typeof window === 'undefined') {
    console.error(
      new Error(
        'Can only install arcgis-js-api-devtools in a browser environment.'
      )
    );
  }

  // Don't install more than once.
  if (installed === true) {
    return;
  }

  let devtoolsFormatters = ((window as any).devtoolsFormatters =
    (window as any).devtoolsFormatters || []);

  devtoolsFormatters.push(new JSONMLFormatter(new ArcGISJSAPIFormatter()));

  installed = true;
}
