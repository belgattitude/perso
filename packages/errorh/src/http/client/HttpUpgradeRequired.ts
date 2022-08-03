import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpUpgradeRequired extends HttpError {
  static readonly STATUS = 426;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpUpgradeRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpUpgradeRequired.prototype);
    this.name = 'HttpUpgradeRequired';
  }
}
