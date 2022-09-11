import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNetworkAuthenticationRequired';

/**
 * Server status 511
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
export class HttpNetworkAuthenticationRequired extends HttpServerException {
  static readonly STATUS = 511;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 511, params));
    Object.setPrototypeOf(this, HttpNetworkAuthenticationRequired.prototype);
    this.name = className;
  }
}
