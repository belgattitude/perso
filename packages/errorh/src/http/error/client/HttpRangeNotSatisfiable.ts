import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpRangeNotSatisfiable extends HttpException {
  static readonly STATUS = 416;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpRangeNotSatisfiable.STATUS,
    });
    Object.setPrototypeOf(this, HttpRangeNotSatisfiable.prototype);
    this.name = 'HttpRangeNotSatisfiable';
  }
}
