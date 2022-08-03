import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpForbidden extends HttpError {
  static readonly STATUS = 403;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpForbidden.STATUS,
    });
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = 'HttpForbidden';
  }
}
