import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpLoopDetected';

/**
 * Server status 508 - webdav specific
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
 */
export class HttpLoopDetected extends HttpServerException {
  static readonly STATUS = 508;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 508, params));
    Object.setPrototypeOf(this, HttpLoopDetected.prototype);
    this.name = className;
  }
}
