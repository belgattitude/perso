import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpProxyError';

export class HttpProxyError extends HttpServerException {
  static readonly STATUS = 502;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 502, params));
    Object.setPrototypeOf(this, HttpProxyError.prototype);
    this.name = className;
  }
}
