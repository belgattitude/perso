import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpForbidden extends HttpException {
  static readonly STATUS = 403;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpForbidden.STATUS,
    });
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = 'HttpForbidden';
  }
}
