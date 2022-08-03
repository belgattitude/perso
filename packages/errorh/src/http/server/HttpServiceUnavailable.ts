import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpServiceUnavailable extends HttpError {
  static readonly STATUS = 503;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpServiceUnavailable.STATUS,
    });
    Object.setPrototypeOf(this, HttpServiceUnavailable.prototype);
    this.name = 'HttpServiceUnavailable';
  }
}
