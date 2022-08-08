import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpNetworkAuthenticationRequired extends HttpException {
  static readonly STATUS = 511;
  static readonly REASON = 'Network Authentication Required';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpNetworkAuthenticationRequired.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpNetworkAuthenticationRequired.STATUS;
    super({ message, statusCode, url, cause });

    Object.setPrototypeOf(this, HttpNetworkAuthenticationRequired.prototype);
    this.name = 'HttpNetworkAuthenticationRequired';
  }
}
