import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpExpectationFailed extends HttpClientException {
  static readonly STATUS = 417;
  static readonly REASON = 'Expectation Failed';
  constructor(params?: HttpErrorParams) {
    const { message = HttpExpectationFailed.REASON, url, cause } = params ?? {};
    const statusCode = HttpExpectationFailed.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpExpectationFailed.prototype);
    this.name = 'HttpExpectationFailed';
  }
}
