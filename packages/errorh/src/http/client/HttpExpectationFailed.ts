import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpExpectationFailed';

/**
 * Client status 417
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export class HttpExpectationFailed extends HttpClientException {
  static readonly STATUS = 417;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 417, msgOrParams));
    Object.setPrototypeOf(this, HttpExpectationFailed.prototype);
    this.name = className;
  }
}
