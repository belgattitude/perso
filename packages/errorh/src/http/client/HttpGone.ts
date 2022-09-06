import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpGone';

export class HttpGone extends HttpServerException {
  static readonly STATUS = 410;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 410, params));
    Object.setPrototypeOf(this, HttpGone.prototype);
    this.name = className;
  }
}
