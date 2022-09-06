import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpForbidden extends HttpClientException {
  static readonly STATUS = 403;
  static readonly REASON = 'Forbidden';
  constructor(params?: HttpErrorParams) {
    const { message = HttpForbidden.REASON, url, cause } = params ?? {};
    const statusCode = HttpForbidden.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = 'HttpForbidden';
  }
}
