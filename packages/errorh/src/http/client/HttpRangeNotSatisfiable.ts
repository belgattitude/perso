import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpRangeNotSatisfiable extends HttpClientException {
  static readonly STATUS = 416;
  static readonly REASON = 'Range Not Satisfiable';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpRangeNotSatisfiable.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpRangeNotSatisfiable.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpRangeNotSatisfiable.prototype);
    this.name = 'HttpRangeNotSatisfiable';
  }
}
