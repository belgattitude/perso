import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpVersionNotSupported';

export class HttpVersionNotSupported extends HttpServerException {
  static readonly STATUS = 505;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 505, params));
    Object.setPrototypeOf(this, HttpVersionNotSupported.prototype);
    this.name = className;
  }
}
