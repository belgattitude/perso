import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpBadMapping extends HttpError {
  static readonly STATUS = 421;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpBadMapping.STATUS,
    });
    Object.setPrototypeOf(this, HttpBadMapping.prototype);
    this.name = 'HttpBadMapping';
  }
}
