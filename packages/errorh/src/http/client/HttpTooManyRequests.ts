import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpTooManyRequests';

export class HttpTooManyRequests extends HttpClientException {
  static readonly STATUS = 429;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 429, params));
    Object.setPrototypeOf(this, HttpTooManyRequests.prototype);
    this.name = className;
  }
}
