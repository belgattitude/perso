import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpConflict extends HttpError {
  static readonly STATUS = 409;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpConflict.STATUS,
    });
    Object.setPrototypeOf(this, HttpConflict.prototype);
    this.name = 'HttpConflict';
  }
}
