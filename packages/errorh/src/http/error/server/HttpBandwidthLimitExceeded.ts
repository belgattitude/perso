import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpBandwidthLimitExceeded extends HttpException {
  static readonly STATUS = 509;
  static readonly REASON = 'Bandwidth Limit Exceeded';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpBandwidthLimitExceeded.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpBandwidthLimitExceeded.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpBandwidthLimitExceeded.prototype);
    this.name = 'HttpBandwidthLimitExceeded';
  }
}
