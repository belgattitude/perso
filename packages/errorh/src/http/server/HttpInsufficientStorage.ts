import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpInsufficientStorage';

/**
 * Server status 507 - webdav specific
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
 */
export class HttpInsufficientStorage extends HttpServerException {
  static readonly STATUS = 507;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 507, params));
    Object.setPrototypeOf(this, HttpInsufficientStorage.prototype);
    this.name = className;
  }
}
