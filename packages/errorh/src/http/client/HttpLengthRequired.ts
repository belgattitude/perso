import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpLengthRequired extends HttpError {
  static readonly STATUS = 411;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpLengthRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = 'HttpLengthRequired';
  }
}
