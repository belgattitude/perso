export type HttpErrorOptions = {
  statusCode: number;
  cause?: Error;
};

export class HttpError extends Error {
  public readonly statusCode: number;
  constructor(message: string, options: HttpErrorOptions) {
    super(message, { cause: options.cause });
    this.statusCode = options.statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = HttpError.prototype.constructor.name;
  }
}
