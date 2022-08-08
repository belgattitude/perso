import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpNotImplemented extends HttpException {
  static readonly STATUS = 501;
  static readonly REASON = 'Not Implemented';
  constructor(params?: HttpErrorParams) {
    const { message = HttpNotImplemented.REASON, url, cause } = params ?? {};
    const statusCode = HttpNotImplemented.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpNotImplemented.prototype);
    this.name = 'HttpNotImplemented';
  }
}
