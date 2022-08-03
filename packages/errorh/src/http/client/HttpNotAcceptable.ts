import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpNotAcceptable extends HttpError {
  static readonly STATUS = 406;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpNotAcceptable.STATUS,
    });
    Object.setPrototypeOf(this, HttpNotAcceptable.prototype);
    this.name = 'HttpNotAcceptable';
  }
}
