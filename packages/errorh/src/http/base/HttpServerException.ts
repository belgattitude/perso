import { HttpException } from './HttpException';
import type { HttpExceptionParams } from './HttpException';

export class HttpServerException extends HttpException {
  constructor(params: HttpExceptionParams) {
    super(params);
    this.name = 'HttpServerException';
    Object.setPrototypeOf(this, HttpServerException.prototype);
  }
}
