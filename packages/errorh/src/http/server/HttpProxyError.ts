import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpProxyError extends HttpServerException {
  static readonly STATUS = 502;
  static readonly REASON = 'Proxy Error';
  constructor(params?: HttpErrorParams) {
    const { message = HttpProxyError.REASON, url, cause } = params ?? {};
    const statusCode = HttpProxyError.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpProxyError.prototype);
    this.name = 'HttpProxyError';
  }
}
