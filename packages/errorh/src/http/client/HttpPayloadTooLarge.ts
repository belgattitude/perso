import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPayloadTooLarge';

export class HttpPayloadTooLarge extends HttpClientException {
  static readonly STATUS = 413;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 413, params));
    Object.setPrototypeOf(this, HttpPayloadTooLarge.prototype);
    this.name = className;
  }
}
