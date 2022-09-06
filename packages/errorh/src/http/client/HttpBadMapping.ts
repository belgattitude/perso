import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpBadMapping extends HttpClientException {
  static readonly STATUS = 421;
  static readonly REASON = 'Bad Mapping';
  constructor(params?: HttpErrorParams) {
    const { message = HttpBadMapping.REASON, url, cause } = params ?? {};
    const statusCode = HttpBadMapping.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpBadMapping.prototype);
    this.name = 'HttpBadMapping';
  }
}
