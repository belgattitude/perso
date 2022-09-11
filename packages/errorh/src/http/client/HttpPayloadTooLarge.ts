import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPayloadTooLarge';

/**
 * Client status 413
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
export class HttpPayloadTooLarge extends HttpClientException {
  static readonly STATUS = 413;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 413, msgOrParams));
    Object.setPrototypeOf(this, HttpPayloadTooLarge.prototype);
    this.name = className;
  }
}
