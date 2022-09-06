import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUnauthorized extends HttpClientException {
  static readonly STATUS = 401;
  static readonly REASON = 'Unauthorized';
  constructor(params?: HttpErrorParams) {
    const { message = HttpUnauthorized.REASON, url, cause } = params ?? {};
    const statusCode = HttpUnauthorized.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = 'HttpUnauthorized';
  }
}
