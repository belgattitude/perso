import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpVersionNotSupported';

export class HttpVersionNotSupported extends HttpServerException {
  static readonly STATUS = 505;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 505, params));
    Object.setPrototypeOf(this, HttpVersionNotSupported.prototype);
    this.name = className;
  }
}
