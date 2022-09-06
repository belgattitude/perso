import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpBandwidthLimitExceeded';

export class HttpBandwidthLimitExceeded extends HttpServerException {
  static readonly STATUS = 509;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 509, params));
    Object.setPrototypeOf(this, HttpBandwidthLimitExceeded.prototype);
    this.name = className;
  }
}
