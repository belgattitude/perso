import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpGone extends HttpServerException {
  static readonly STATUS = 410;
  static readonly REASON = 'Gone';
  constructor(params?: HttpErrorParams) {
    const { message = HttpGone.REASON, url, cause } = params ?? {};
    const statusCode = HttpGone.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpGone.prototype);
    this.name = 'HttpGone';
  }
}
