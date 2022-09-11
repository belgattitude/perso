import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpBandwidthLimitExceeded';

/**
 * Server status 509
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/509
 */
export class HttpBandwidthLimitExceeded extends HttpServerException {
  static readonly STATUS = 509;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 509, msgOrParams));
    Object.setPrototypeOf(this, HttpBandwidthLimitExceeded.prototype);
    this.name = className;
  }
}
