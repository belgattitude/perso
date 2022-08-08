import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpMethodNotAllowed extends HttpException {
  static readonly STATUS = 405;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpMethodNotAllowed.STATUS,
    });
    Object.setPrototypeOf(this, HttpMethodNotAllowed.prototype);
    this.name = 'HttpMethodNotAllowed';
  }
}
