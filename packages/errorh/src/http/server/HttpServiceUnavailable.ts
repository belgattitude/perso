import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpServiceUnavailable';

export class HttpServiceUnavailable extends HttpServerException {
  static readonly STATUS = 503;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 503, params));
    Object.setPrototypeOf(this, HttpServiceUnavailable.prototype);
    this.name = className;
  }
}
