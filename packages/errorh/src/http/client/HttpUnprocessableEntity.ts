import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUnprocessableEntity extends HttpClientException {
  static readonly STATUS = 422;
  static readonly REASON = 'Unprocessable Entity';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpUnprocessableEntity.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpUnprocessableEntity.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUnprocessableEntity.prototype);
    this.name = 'HttpUnprocessableEntity';
  }
}
