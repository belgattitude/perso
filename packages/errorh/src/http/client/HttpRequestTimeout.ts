import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpRequestTimeout extends HttpError {
  static readonly STATUS = 408;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpRequestTimeout.STATUS,
    });
    Object.setPrototypeOf(this, HttpRequestTimeout.prototype);
    this.name = 'HttpRequestTimeout';
  }
}
