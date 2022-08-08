import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpBadRequest extends HttpException {
  static readonly STATUS = 400;
  constructor(message?: string, options?: HttpErrorOptions) {
    super(message ?? 'Bad Request', {
      cause: options?.cause,
      statusCode: HttpBadRequest.STATUS,
    });
    Object.setPrototypeOf(this, HttpBadRequest.prototype);
    this.name = 'HttpBadRequest';
  }
}
