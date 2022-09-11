import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpLengthRequired';

/**
 * Client status 411
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
export class HttpLengthRequired extends HttpClientException {
  static readonly STATUS = 411;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 411, msgOrParams));
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = className;
  }
}
