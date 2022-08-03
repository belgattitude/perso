import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpImATeapot extends HttpError {
  static readonly STATUS = 418;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpImATeapot.STATUS,
    });
    Object.setPrototypeOf(this, HttpImATeapot.prototype);
    this.name = 'HttpImATeapot';
  }
}
