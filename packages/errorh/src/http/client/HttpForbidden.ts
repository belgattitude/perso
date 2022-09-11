import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpForbidden';

/**
 * Client status 403
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export class HttpForbidden extends HttpClientException {
  static readonly STATUS = 403;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 403, params));
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = className;
  }
}
