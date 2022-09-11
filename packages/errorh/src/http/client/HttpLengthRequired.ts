import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpLengthRequired';

/**
 * Client status 411
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
export class HttpLengthRequired extends HttpClientException {
  static readonly STATUS = 411;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 411, params));
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = className;
  }
}
