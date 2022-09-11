import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpBadGateway';

/**
 * Server status 502
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
export class HttpBadGateway extends HttpServerException {
  static readonly STATUS = 502;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 502, params));
    Object.setPrototypeOf(this, HttpBadGateway.prototype);
    this.name = className;
  }
}
