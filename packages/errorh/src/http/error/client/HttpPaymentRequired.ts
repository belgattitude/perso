import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpPaymentRequired extends HttpException {
  static readonly STATUS = 402;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpPaymentRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpPaymentRequired.prototype);
    this.name = 'HttpPaymentRequired';
  }
}
