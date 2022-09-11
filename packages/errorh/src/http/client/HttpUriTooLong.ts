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
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 414, msgOrParams));
    Object.setPrototypeOf(this, HttpUriTooLong.prototype);
    this.name = className;
  }
}
