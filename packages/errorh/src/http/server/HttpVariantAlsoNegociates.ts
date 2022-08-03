import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpVariantAlsoNegociates extends HttpError {
  static readonly STATUS = 506;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpVariantAlsoNegociates.STATUS,
    });
    Object.setPrototypeOf(this, HttpVariantAlsoNegociates.prototype);
    this.name = 'HttpVariantAlsoNegociates';
  }
}
