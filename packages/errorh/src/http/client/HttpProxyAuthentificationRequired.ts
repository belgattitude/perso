import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpProxyAuthentificationRequired';

export class HttpProxyAuthentificationRequired extends HttpClientException {
  static readonly STATUS = 407;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 407, params));
    Object.setPrototypeOf(this, HttpProxyAuthentificationRequired.prototype);
    this.name = className;
  }
}
