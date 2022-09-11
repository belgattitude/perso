import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpMethodNotAllowed';

/**
 * Client status 405
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
export class HttpMethodNotAllowed extends HttpClientException {
  static readonly STATUS = 405;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 405, msgOrParams));
    Object.setPrototypeOf(this, HttpMethodNotAllowed.prototype);
    this.name = className;
  }
}
