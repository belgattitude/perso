import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpBadRequest extends HttpClientException {
  static readonly STATUS = 400;
  static readonly REASON = 'Bad Request';
  constructor(params?: HttpErrorParams) {
    const { message = HttpBadRequest.REASON, url, cause } = params ?? {};
    const statusCode = HttpBadRequest.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpBadRequest.prototype);
    this.name = 'HttpBadRequest';
  }
}
