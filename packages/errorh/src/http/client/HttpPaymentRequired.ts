import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpPaymentRequired';

export class HttpPaymentRequired extends HttpClientException {
  static readonly STATUS = 402;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 402, params));
    Object.setPrototypeOf(this, HttpPaymentRequired.prototype);
    this.name = className;
  }
}
