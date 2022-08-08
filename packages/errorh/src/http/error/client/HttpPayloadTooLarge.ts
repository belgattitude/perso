import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpPayloadTooLarge extends HttpException {
  static readonly STATUS = 413;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpPayloadTooLarge.STATUS,
    });
    Object.setPrototypeOf(this, HttpPayloadTooLarge.prototype);
    this.name = 'HttpEntityTooLarge';
  }
}
