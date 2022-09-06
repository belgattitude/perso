import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpBadGateway extends HttpServerException {
  static readonly STATUS = 502;
  static readonly REASON = 'Bad Gateway';
  constructor(params?: HttpErrorParams) {
    const { message = HttpBadGateway.REASON, url, cause } = params ?? {};
    const statusCode = HttpBadGateway.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpBadGateway.prototype);
    this.name = 'HttpBadGateway';
  }
}
