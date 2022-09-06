import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpUpgradeRequired';

export class HttpUpgradeRequired extends HttpClientException {
  static readonly STATUS = 426;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 426, params));
    Object.setPrototypeOf(this, HttpUpgradeRequired.prototype);
    this.name = className;
  }
}
