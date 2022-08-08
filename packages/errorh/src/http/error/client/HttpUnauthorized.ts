import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUnauthorized extends HttpException {
  static readonly STATUS = 401;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUnauthorized.STATUS,
    });
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = 'HttpUnauthorized';
  }
}
