import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpMisredirectedRequest';

export class HttpMisredirectedRequest extends HttpClientException {
  static readonly STATUS = 421;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 421, params));
    Object.setPrototypeOf(this, HttpMisredirectedRequest.prototype);
    this.name = className;
  }
}
