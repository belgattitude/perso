import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUnsupportedMediaType extends HttpClientException {
  static readonly STATUS = 415;
  static readonly REASON = 'Unsupported Media Type';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpUnsupportedMediaType.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpUnsupportedMediaType.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUnsupportedMediaType.prototype);
    this.name = 'HttpUnsupportedMediaType';
  }
}
