import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpTooManyRequests';

export class HttpTooManyRequests extends HttpClientException {
  static readonly STATUS = 429;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 429, params));
    Object.setPrototypeOf(this, HttpTooManyRequests.prototype);
    this.name = className;
  }
}
