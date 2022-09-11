import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPaymentRequired';

/**
 * Client status 402
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
export class HttpPaymentRequired extends HttpClientException {
  static readonly STATUS = 402;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 402, msgOrParams));
    Object.setPrototypeOf(this, HttpPaymentRequired.prototype);
    this.name = className;
  }
}
