import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpUnavailableForLegalReasons extends HttpError {
  static readonly STATUS = 451;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUnavailableForLegalReasons.STATUS,
    });
    Object.setPrototypeOf(this, HttpUnavailableForLegalReasons.prototype);
    this.name = 'HttpUnavailableForLegalReasons';
  }
}
