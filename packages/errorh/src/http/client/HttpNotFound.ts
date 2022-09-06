import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpNotFound';

export class HttpNotFound extends HttpClientException {
  static readonly STATUS = 404;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 404, params));
    Object.setPrototypeOf(this, HttpNotFound.prototype);
    this.name = className;
  }
}
