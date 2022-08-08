import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpExpectationFailed extends HttpException {
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
