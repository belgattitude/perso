import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpGatewayTimeout';

/**
 * Server status 504
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export class HttpGatewayTimeout extends HttpServerException {
  static readonly STATUS = 504;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 504, params));
    Object.setPrototypeOf(this, HttpGatewayTimeout.prototype);
    this.name = className;
  }
}
