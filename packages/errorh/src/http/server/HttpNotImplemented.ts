import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotImplemented';

/**
 * Server status 501
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
export class HttpNotImplemented extends HttpServerException {
  static readonly STATUS = 501;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 501, params));
    Object.setPrototypeOf(this, HttpNotImplemented.prototype);
    this.name = className;
  }
}
