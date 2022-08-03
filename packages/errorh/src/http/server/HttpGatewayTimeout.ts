import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpGatewayTimeout extends HttpError {
  static readonly STATUS = 504;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpGatewayTimeout.STATUS,
    });
    Object.setPrototypeOf(this, HttpGatewayTimeout.prototype);
    this.name = 'HttpGatewayTimeout';
  }
}
