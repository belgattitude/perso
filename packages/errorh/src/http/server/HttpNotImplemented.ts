import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpNotImplemented extends HttpError {
  static readonly STATUS = 501;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpNotImplemented.STATUS,
    });
    Object.setPrototypeOf(this, HttpNotImplemented.prototype);
    this.name = 'HttpNotImplemented';
  }
}
