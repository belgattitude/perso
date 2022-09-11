import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpForbidden';

/**
 * Client status 403
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export class HttpForbidden extends HttpClientException {
  static readonly STATUS = 403;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 403, msgOrParams));
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = className;
  }
}
