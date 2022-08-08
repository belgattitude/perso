import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpGone extends HttpException {
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
