import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpGatewayTimeout';

export class HttpGatewayTimeout extends HttpServerException {
  static readonly STATUS = 504;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 504, params));
    Object.setPrototypeOf(this, HttpGatewayTimeout.prototype);
    this.name = className;
  }
}
