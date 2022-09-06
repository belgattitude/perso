import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpPreconditionRequired extends HttpClientException {
  static readonly STATUS = 428;
  static readonly REASON = 'Precondition Required';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpPreconditionRequired.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpPreconditionRequired.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpPreconditionRequired.prototype);
    this.name = 'HttpPreconditionRequired';
  }
}
