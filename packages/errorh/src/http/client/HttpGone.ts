import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpGone extends HttpError {
  static readonly STATUS = 410;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpGone.STATUS,
    });
    Object.setPrototypeOf(this, HttpGone.prototype);
    this.name = 'HttpGone';
  }
}
