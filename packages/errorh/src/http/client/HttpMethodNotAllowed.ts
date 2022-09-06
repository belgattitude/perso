import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpMethodNotAllowed';

export class HttpMethodNotAllowed extends HttpServerException {
  static readonly STATUS = 405;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 405, params));
    Object.setPrototypeOf(this, HttpMethodNotAllowed.prototype);
    this.name = className;
  }
}
