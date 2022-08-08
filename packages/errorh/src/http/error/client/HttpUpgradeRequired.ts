import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpUpgradeRequired extends HttpException {
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
