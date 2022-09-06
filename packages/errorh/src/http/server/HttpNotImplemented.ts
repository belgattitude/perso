import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpNotImplemented';

export class HttpNotImplemented extends HttpServerException {
  static readonly STATUS = 501;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 501, params));
    Object.setPrototypeOf(this, HttpNotImplemented.prototype);
    this.name = className;
  }
}
