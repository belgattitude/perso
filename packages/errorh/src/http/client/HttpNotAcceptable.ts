import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpNotAcceptable';

export class HttpNotAcceptable extends HttpClientException {
  static readonly STATUS = 406;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 406, params));
    Object.setPrototypeOf(this, HttpNotAcceptable.prototype);
    this.name = className;
  }
}
