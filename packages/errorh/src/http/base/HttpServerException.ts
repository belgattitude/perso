import type { HttpStatusCode } from '../types';
import { HttpException } from './HttpException';

export type HttpExceptionParams = {
  statusCode: HttpStatusCode;
  message: string;
  url?: string;
  cause?: Error;
};

export class HttpServerException extends HttpException {
  constructor(params: HttpExceptionParams) {
    super(params);
    this.name = 'HttpServerException';
    Object.setPrototypeOf(this, HttpServerException.prototype);
  }
}
