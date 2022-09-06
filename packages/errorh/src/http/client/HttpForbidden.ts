import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpForbidden';

export class HttpForbidden extends HttpClientException {
  static readonly STATUS = 403;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 403, params));
    Object.setPrototypeOf(this, HttpForbidden.prototype);
    this.name = className;
  }
}
