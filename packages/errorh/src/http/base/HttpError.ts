import type { HttpStatusCode } from '../types';

export type HttpErrorOptions = {
  statusCode: HttpStatusCode;
  cause?: Error;
};

export class HttpError extends Error {
  public readonly statusCode: number;
  constructor(message: string, options: HttpErrorOptions) {
    super(message, { cause: options.cause });
    this.statusCode = options.statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = 'HttpError';
  }
  public getStatusCode(): HttpStatusCode {
    return this.statusCode;
  }
}
