import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpRequestTimeout extends HttpClientException {
  static readonly STATUS = 408;
  static readonly REASON = 'Request Timeout';
  constructor(params?: HttpErrorParams) {
    const { message = HttpRequestTimeout.REASON, url, cause } = params ?? {};
    const statusCode = HttpRequestTimeout.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpRequestTimeout.prototype);
    this.name = 'HttpRequestTimeout';
  }
}
