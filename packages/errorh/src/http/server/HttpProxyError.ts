import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpProxyError extends HttpError {
  static readonly STATUS = 502;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpProxyError.STATUS,
    });
    Object.setPrototypeOf(this, HttpProxyError.prototype);
    this.name = 'HttpProxyError';
  }
}
