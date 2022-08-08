import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpLengthRequired extends HttpException {
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
