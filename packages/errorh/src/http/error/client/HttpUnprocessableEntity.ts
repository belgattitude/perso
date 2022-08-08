import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUnprocessableEntity extends HttpException {
  static readonly STATUS = 422;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUnprocessableEntity.STATUS,
    });
    Object.setPrototypeOf(this, HttpUnprocessableEntity.prototype);
    this.name = 'HttpUnprocessableEntity';
  }
}
