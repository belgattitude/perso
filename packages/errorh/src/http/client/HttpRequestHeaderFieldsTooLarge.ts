import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpRequestHeaderFieldsTooLarge';

/**
 * Client status 431
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
export class HttpRequestHeaderFieldsTooLarge extends HttpClientException {
  static readonly STATUS = 431;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 431, msgOrParams));
    Object.setPrototypeOf(this, HttpRequestHeaderFieldsTooLarge.prototype);
    this.name = className;
  }
}
