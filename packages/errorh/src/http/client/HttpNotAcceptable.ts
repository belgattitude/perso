import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotAcceptable';

export class HttpNotAcceptable extends HttpClientException {
  static readonly STATUS = 406;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 406, params));
    Object.setPrototypeOf(this, HttpNotAcceptable.prototype);
    this.name = className;
  }
}
