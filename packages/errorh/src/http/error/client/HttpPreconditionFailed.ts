import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpPreconditionFailed extends HttpException {
  static readonly STATUS = 412;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpPreconditionFailed.STATUS,
    });
    Object.setPrototypeOf(this, HttpPreconditionFailed.prototype);
    this.name = 'HttpPreconditionFailed';
  }
}
