import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpGatewayTimeout extends HttpServerException {
  static readonly STATUS = 504;
  static readonly REASON = 'Gateway Timeout';
  constructor(params?: HttpErrorParams) {
    const { message = HttpGatewayTimeout.REASON, url, cause } = params ?? {};
    const statusCode = HttpGatewayTimeout.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpGatewayTimeout.prototype);
    this.name = 'HttpGatewayTimeout';
  }
}
