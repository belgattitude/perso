import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpNotFound extends HttpException {
  static readonly STATUS = 404;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpNotFound.STATUS,
    });
    Object.setPrototypeOf(this, HttpNotFound.prototype);
    this.name = 'HttpNotFound';
  }
}
