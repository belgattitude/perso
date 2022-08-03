import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpBadRequest extends HttpError {
  static readonly STATUS = 400;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpBadRequest.STATUS,
    });
    Object.setPrototypeOf(this, HttpBadRequest.prototype);
    this.name = 'HttpBadRequest';
  }
}
