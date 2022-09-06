import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpInternalServerError';

export class HttpInternalServerError extends HttpServerException {
  static readonly STATUS = 500;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 500, params));
    Object.setPrototypeOf(this, HttpInternalServerError.prototype);
    this.name = className;
  }
}
