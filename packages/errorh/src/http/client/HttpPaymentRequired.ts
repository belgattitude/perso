import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpPaymentRequired extends HttpClientException {
  static readonly STATUS = 402;
  static readonly REASON = 'Payment Required';
  constructor(params?: HttpErrorParams) {
    const { message = HttpPaymentRequired.REASON, url, cause } = params ?? {};
    const statusCode = HttpPaymentRequired.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpPaymentRequired.prototype);
    this.name = 'HttpPaymentRequired';
  }
}
