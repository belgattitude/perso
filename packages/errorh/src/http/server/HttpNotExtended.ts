import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpNotExtended extends HttpError {
  static readonly STATUS = 510;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpNotExtended.STATUS,
    });
    Object.setPrototypeOf(this, HttpNotExtended.prototype);
    this.name = 'HttpNotExtended';
  }
}
