import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUnsupportedMediaType extends HttpException {
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
