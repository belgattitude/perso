import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnavailableForLegalReasons';

export class HttpUnavailableForLegalReasons extends HttpClientException {
  static readonly STATUS = 451;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 451, params));
    Object.setPrototypeOf(this, HttpUnavailableForLegalReasons.prototype);
    this.name = className;
  }
}
