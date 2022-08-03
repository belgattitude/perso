import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpBadGateway extends HttpError {
  static readonly STATUS = 502;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpBadGateway.STATUS,
    });
    Object.setPrototypeOf(this, HttpBadGateway.prototype);
    this.name = 'HttpBadGateway';
  }
}
