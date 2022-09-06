import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpNotFound extends HttpClientException {
  static readonly STATUS = 404;
  static readonly REASON = 'Not Found';
  constructor(params?: HttpErrorParams) {
    const { message = HttpNotFound.REASON, url, cause } = params ?? {};
    const statusCode = HttpNotFound.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpNotFound.prototype);
    this.name = 'HttpNotFound';
  }
}
