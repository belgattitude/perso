import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpLengthRequired extends HttpServerException {
  static readonly STATUS = 411;
  static readonly REASON = 'Length Required';
  constructor(params?: HttpErrorParams) {
    const { message = HttpLengthRequired.REASON, url, cause } = params ?? {};
    const statusCode = HttpLengthRequired.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = 'HttpLengthRequired';
  }
}
