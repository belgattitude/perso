import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpPayloadTooLarge extends HttpClientException {
  static readonly STATUS = 413;
  static readonly REASON = 'Payload Too Large';
  constructor(params?: HttpErrorParams) {
    const { message = HttpPayloadTooLarge.REASON, url, cause } = params ?? {};
    const statusCode = HttpPayloadTooLarge.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpPayloadTooLarge.prototype);

    this.name = 'HttpPayloadTooLarge';
  }
}
