import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpProxyAuthenticationRequired';

export class HttpProxyAuthenticationRequired extends HttpClientException {
  static readonly STATUS = 407;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 407, params));
    Object.setPrototypeOf(this, HttpProxyAuthenticationRequired.prototype);
    this.name = className;
  }
}
