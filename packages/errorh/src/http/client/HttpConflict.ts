import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpConflict extends HttpClientException {
  static readonly STATUS = 409;
  static readonly REASON = 'Conflict';
  constructor(params?: HttpErrorParams) {
    const { message = HttpConflict.REASON, url, cause } = params ?? {};
    const statusCode = HttpConflict.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpConflict.prototype);
    this.name = 'HttpConflict';
  }
}
