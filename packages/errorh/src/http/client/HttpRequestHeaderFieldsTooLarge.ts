import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpRequestHeaderFieldsTooLarge';

export class HttpRequestHeaderFieldsTooLarge extends HttpClientException {
  static readonly STATUS = 431;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 431, params));
    Object.setPrototypeOf(this, HttpRequestHeaderFieldsTooLarge.prototype);
    this.name = className;
  }
}
