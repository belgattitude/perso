import type { HttpStatusCode } from '../types';

export type HttpExceptionParams = {
  statusCode: HttpStatusCode;
  message: string;
  url?: string;
  cause?: Error;
};

export class HttpException extends Error {
  /**
   * Http error status code
   */
  public readonly statusCode: number;
  /**
   * Optional url that caused the error
   */
  public readonly url: string | undefined;

  constructor(params: HttpExceptionParams) {
    const { message, statusCode, url, cause } = params;
    if (cause) {
      super(message, { cause });
    } else {
      super(message);
    }
    this.name = 'HttpException';
    this.url = url;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}
