import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpRequestTimeout extends HttpException {
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
