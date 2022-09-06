import { HttpException } from './HttpException';
import type { HttpExceptionParams } from './HttpException';

export class HttpClientException extends HttpException {
  constructor(params: HttpExceptionParams) {
    super(params);
    this.name = 'HttpClientException';
    Object.setPrototypeOf(this, HttpClientException.prototype);
  }
}
