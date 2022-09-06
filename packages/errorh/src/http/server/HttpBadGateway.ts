import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpBadGateway';

export class HttpBadGateway extends HttpServerException {
  static readonly STATUS = 502;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 502, params));
    Object.setPrototypeOf(this, HttpBadGateway.prototype);
    this.name = className;
  }
}
