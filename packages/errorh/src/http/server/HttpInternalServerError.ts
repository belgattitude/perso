import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpInternalServerError extends HttpError {
  static readonly STATUS = 500;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpInternalServerError.STATUS,
    });
    Object.setPrototypeOf(this, HttpInternalServerError.prototype);
    this.name = 'HttpInternalServerError';
  }
}
