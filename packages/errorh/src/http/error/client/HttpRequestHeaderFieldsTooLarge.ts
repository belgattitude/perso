import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpRequestHeaderFieldsTooLarge extends HttpException {
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
