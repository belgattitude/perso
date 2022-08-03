import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpPreconditionRequired extends HttpError {
  static readonly STATUS = 428;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpPreconditionRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpPreconditionRequired.prototype);
    this.name = 'HttpPreconditionRequired';
  }
}
