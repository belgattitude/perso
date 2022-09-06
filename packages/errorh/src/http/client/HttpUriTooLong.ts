import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpUriTooLong';

export class HttpUriTooLong extends HttpClientException {
  static readonly STATUS = 414;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 414, params));
    Object.setPrototypeOf(this, HttpUriTooLong.prototype);
    this.name = className;
  }
}
