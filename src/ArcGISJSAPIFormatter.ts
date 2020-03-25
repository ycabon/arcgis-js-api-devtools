import { Formatter } from './interfaces';

import CollectionFormatter from './CollectionFormatter';
import ColorFormatter from './ColorFormatter';
import AccessorFormatter from './AccessorFormatter';

export default class ArcGISJSAPIFormatter {
  private _formatters: Formatter[] = [
    new CollectionFormatter(),
    new ColorFormatter(),
    new AccessorFormatter(),
  ];

  accept(object: any): boolean {
    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return true;
      }
    }

    return false;
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
    if (!object) {
      return [];
    }

    for (let formatter of this._formatters) {
      if (formatter.accept(object)) {
        return formatter.children(object);
      }
    }

    return [];
  }
}
