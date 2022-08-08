import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUriTooLong extends HttpException {
  static readonly STATUS = 414;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUriTooLong.STATUS,
    });
    Object.setPrototypeOf(this, HttpUriTooLong.prototype);
    this.name = 'HttpUriTooLong';
  }
}
