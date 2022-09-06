import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpUnauthorized';

export class HttpUnauthorized extends HttpClientException {
  static readonly STATUS = 401;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 401, params));
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = className;
  }
}
