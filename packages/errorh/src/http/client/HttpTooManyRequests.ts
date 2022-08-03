import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpTooManyRequests extends HttpError {
  static readonly STATUS = 429;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpTooManyRequests.STATUS,
    });
    Object.setPrototypeOf(this, HttpTooManyRequests.prototype);
    this.name = 'HttpTooManyRequests';
  }
}
