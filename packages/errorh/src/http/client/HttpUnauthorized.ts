import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpUnauthorized extends HttpError {
  static readonly STATUS = 401;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUnauthorized.STATUS,
    });
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = 'HttpUnauthorized';
  }
}
