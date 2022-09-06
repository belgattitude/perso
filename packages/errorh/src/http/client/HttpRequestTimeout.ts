import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpRequestTimeout';

export class HttpRequestTimeout extends HttpClientException {
  static readonly STATUS = 408;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 408, params));
    Object.setPrototypeOf(this, HttpRequestTimeout.prototype);
    this.name = className;
  }
}
