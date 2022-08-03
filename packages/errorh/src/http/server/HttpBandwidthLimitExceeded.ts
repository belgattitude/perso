import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpBandwidthLimitExceeded extends HttpError {
  static readonly STATUS = 509;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpBandwidthLimitExceeded.STATUS,
    });
    Object.setPrototypeOf(this, HttpBandwidthLimitExceeded.prototype);
    this.name = 'HttpBandwidthLimitExceeded';
  }
}
