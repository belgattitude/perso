import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpPreconditionFailed extends HttpClientException {
  static readonly STATUS = 412;
  static readonly REASON = 'Precondition Failed';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpPreconditionFailed.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpPreconditionFailed.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpPreconditionFailed.prototype);
    this.name = 'HttpPreconditionFailed';
  }
}
