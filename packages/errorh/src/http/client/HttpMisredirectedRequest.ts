import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpMisredirectedRequest';

/**
 * Client status 421
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421
 */
export class HttpMisredirectedRequest extends HttpClientException {
  static readonly STATUS = 421;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 421, params));
    Object.setPrototypeOf(this, HttpMisredirectedRequest.prototype);
    this.name = className;
  }
}
