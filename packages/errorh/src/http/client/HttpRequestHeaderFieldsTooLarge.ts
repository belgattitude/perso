import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpRequestHeaderFieldsTooLarge extends HttpError {
  static readonly STATUS = 431;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpRequestHeaderFieldsTooLarge.STATUS,
    });
    Object.setPrototypeOf(this, HttpRequestHeaderFieldsTooLarge.prototype);
    this.name = 'HttpRequestHeaderFieldsTooLarge';
  }
}
