import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpExpectationFailed extends HttpError {
  static readonly STATUS = 417;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpExpectationFailed.STATUS,
    });
    Object.setPrototypeOf(this, HttpExpectationFailed.prototype);
    this.name = 'HttpExpectationFailed';
  }
}
