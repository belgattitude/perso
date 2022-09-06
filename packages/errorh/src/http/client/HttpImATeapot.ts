import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpImATeapot';

export class HttpImATeapot extends HttpServerException {
  static readonly STATUS = 418;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 418, params));
    Object.setPrototypeOf(this, HttpImATeapot.prototype);
    this.name = 'HttpImATeapot';
  }
}
