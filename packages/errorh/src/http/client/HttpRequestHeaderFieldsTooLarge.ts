import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpRequestHeaderFieldsTooLarge extends HttpClientException {
  static readonly STATUS = 431;
  static readonly REASON = 'Request Header Fields Too Large';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpRequestHeaderFieldsTooLarge.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpRequestHeaderFieldsTooLarge.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpRequestHeaderFieldsTooLarge.prototype);
    this.name = 'HttpRequestHeaderFieldsTooLarge';
  }
}
