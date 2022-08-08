import type { HttpErrorOptions } from '../base/HttpError';
import { HttpException } from '../base/HttpError';

export class HttpProxyAuthentificationRequired extends HttpException {
  static readonly STATUS = 407;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpProxyAuthentificationRequired.STATUS,
    });
    Object.setPrototypeOf(this, HttpProxyAuthentificationRequired.prototype);
    this.name = 'HttpProxyAuthentificationRequired';
  }
}
