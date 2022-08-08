import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUnavailableForLegalReasons extends HttpException {
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
