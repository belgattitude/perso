import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpVersionNotSupported extends HttpException {
  static readonly STATUS = 505;
  static readonly REASON = 'Http Version Not Supported';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpVersionNotSupported.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpVersionNotSupported.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpVersionNotSupported.prototype);
    this.name = 'HttpVersionNotSupported';
  }
}
