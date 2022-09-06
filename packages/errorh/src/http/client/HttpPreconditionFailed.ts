import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpPreconditionFailed';

export class HttpPreconditionFailed extends HttpClientException {
  static readonly STATUS = 412;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 412, params));
    Object.setPrototypeOf(this, HttpPreconditionFailed.prototype);
    this.name = className;
  }
}
