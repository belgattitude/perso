import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpExpectationFailed';

export class HttpExpectationFailed extends HttpClientException {
  static readonly STATUS = 417;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 417, params));
    Object.setPrototypeOf(this, HttpExpectationFailed.prototype);
    this.name = className;
  }
}
