import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnauthorized';

/**
 * Client status 401
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export class HttpUnauthorized extends HttpClientException {
  static readonly STATUS = 401;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 401, msgOrParams));
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = className;
  }
}
