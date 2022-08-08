import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpTooManyRequests extends HttpException {
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
