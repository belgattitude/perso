import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpImATeapot extends HttpServerException {
  static readonly STATUS = 418;
  static readonly REASON = 'Im A Teapot';
  constructor(params?: HttpErrorParams) {
    const { message = HttpImATeapot.REASON, url, cause } = params ?? {};
    const statusCode = HttpImATeapot.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpImATeapot.prototype);
    this.name = 'HttpImATeapot';
  }
}
