import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUnavailableForLegalReasons extends HttpClientException {
  static readonly STATUS = 451;
  static readonly REASON = 'Unavailable For Legal Reasons';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpUnavailableForLegalReasons.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpUnavailableForLegalReasons.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUnavailableForLegalReasons.prototype);
    this.name = 'HttpUnavailableForLegalReasons';
  }
}
