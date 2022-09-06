import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpTooManyRequests extends HttpClientException {
  static readonly STATUS = 429;
  static readonly REASON = 'Too Many Requests';
  constructor(params?: HttpErrorParams) {
    const { message = HttpTooManyRequests.REASON, url, cause } = params ?? {};
    const statusCode = HttpTooManyRequests.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpTooManyRequests.prototype);
    this.name = 'HttpTooManyRequests';
  }
}
