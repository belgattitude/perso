import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpMethodNotAllowed extends HttpServerException {
  static readonly STATUS = 405;
  static readonly REASON = 'Method Not Allowed';
  constructor(params?: HttpErrorParams) {
    const { message = HttpMethodNotAllowed.REASON, url, cause } = params ?? {};
    const statusCode = HttpMethodNotAllowed.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpMethodNotAllowed.prototype);
    this.name = 'HttpMethodNotAllowed';
  }
}
