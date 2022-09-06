import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpInternalServerError extends HttpServerException {
  static readonly STATUS = 500;
  static readonly REASON = 'Internal Server Error';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpInternalServerError.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpInternalServerError.STATUS;
    super({ message, statusCode, url, cause });

    Object.setPrototypeOf(this, HttpInternalServerError.prototype);
    this.name = 'HttpInternalServerError';
  }
}
