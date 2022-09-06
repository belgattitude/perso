import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUriTooLong extends HttpClientException {
  static readonly STATUS = 414;
  static readonly REASON = 'Uri Too long';
  constructor(params?: HttpErrorParams) {
    const { message = HttpUriTooLong.REASON, url, cause } = params ?? {};
    const statusCode = HttpUriTooLong.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUriTooLong.prototype);
    this.name = 'HttpUriTooLong';
  }
}
