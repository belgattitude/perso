import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpBandwidthLimitExceeded';

export class HttpBandwidthLimitExceeded extends HttpServerException {
  static readonly STATUS = 509;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 509, params));
    Object.setPrototypeOf(this, HttpBandwidthLimitExceeded.prototype);
    this.name = className;
  }
}
