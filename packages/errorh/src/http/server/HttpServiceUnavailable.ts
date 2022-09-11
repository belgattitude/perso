import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpServiceUnavailable';

/**
 * Server status 503
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */
export class HttpServiceUnavailable extends HttpServerException {
  static readonly STATUS = 503;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 503, msgOrParams));
    Object.setPrototypeOf(this, HttpServiceUnavailable.prototype);
    this.name = className;
  }
}
