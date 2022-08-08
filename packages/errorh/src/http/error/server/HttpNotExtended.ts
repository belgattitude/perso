import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpNotExtended extends HttpException {
  static readonly STATUS = 510;
  static readonly REASON = 'Not Extended';
  constructor(params?: HttpErrorParams) {
    const { message = HttpNotExtended.REASON, url, cause } = params ?? {};
    const statusCode = HttpNotExtended.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpNotExtended.prototype);
    this.name = 'HttpNotExtended';
  }
}
