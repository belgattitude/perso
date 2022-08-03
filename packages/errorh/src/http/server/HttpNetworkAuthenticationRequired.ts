import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpNetworkAuthenticationRequired extends HttpError {
  static readonly STATUS = 511;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpNetworkAuthenticationRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpNetworkAuthenticationRequired.prototype);
    this.name = 'HttpNetworkAuthenticationRequired';
  }
}
