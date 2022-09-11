import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUriTooLong';

/**
 * Client status 414
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
export class HttpUriTooLong extends HttpClientException {
  static readonly STATUS = 414;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 414, params));
    Object.setPrototypeOf(this, HttpUriTooLong.prototype);
    this.name = className;
  }
}
