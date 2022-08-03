import type { HttpErrorOptions } from '../base/HttpError';
import { HttpError } from '../base/HttpError';

export class HttpMisdirectedRequest extends HttpError {
  static readonly STATUS = 421;
  constructor(message: string, options?: HttpErrorOptions) {
    super(message, {
      cause: options?.cause,
      statusCode: HttpMisdirectedRequest.STATUS,
    });
    Object.setPrototypeOf(this, HttpMisdirectedRequest.prototype);
    this.name = 'HttpMisdirectedRequest';
  }
}
