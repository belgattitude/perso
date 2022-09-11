import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpTooEarly';

/**
 * Experimental: expect this behaviour to change in the future
 */
export class HttpTooEarly extends HttpClientException {
  static readonly STATUS = 425;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 425, params));
    Object.setPrototypeOf(this, HttpTooEarly.prototype);
    this.name = className;
  }
}
