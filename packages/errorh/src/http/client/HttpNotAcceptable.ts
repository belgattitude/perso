import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpNotAcceptable extends HttpClientException {
  static readonly STATUS = 406;
  static readonly REASON = 'Not Acceptable';
  constructor(params?: HttpErrorParams) {
    const { message = HttpNotAcceptable.REASON, url, cause } = params ?? {};
    const statusCode = HttpNotAcceptable.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpNotAcceptable.prototype);
    this.name = 'HttpNotAcceptable';
  }
}
