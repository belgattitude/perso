import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpServiceUnavailable extends HttpServerException {
  static readonly STATUS = 503;
  static readonly REASON = 'Service Unavailable';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpServiceUnavailable.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpServiceUnavailable.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpServiceUnavailable.prototype);
    this.name = 'HttpServiceUnavailable';
  }
}
