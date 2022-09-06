import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpNetworkAuthenticationRequired';

export class HttpNetworkAuthenticationRequired extends HttpServerException {
  static readonly STATUS = 511;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 511, params));
    Object.setPrototypeOf(this, HttpNetworkAuthenticationRequired.prototype);
    this.name = className;
  }
}
