import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpUnavailableForLegalReasons';

export class HttpUnavailableForLegalReasons extends HttpClientException {
  static readonly STATUS = 451;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 451, params));
    Object.setPrototypeOf(this, HttpUnavailableForLegalReasons.prototype);
    this.name = className;
  }
}
