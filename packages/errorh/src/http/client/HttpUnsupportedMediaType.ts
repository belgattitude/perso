import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpUnsupportedMediaType extends HttpError {
  static readonly STATUS = 415;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUnsupportedMediaType.STATUS,
    });
    Object.setPrototypeOf(this, HttpUnsupportedMediaType.prototype);
    this.name = 'HttpUnsupportedMediaType';
  }
}
