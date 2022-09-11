import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpConflict';

/**
 * Client status 409
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */
export class HttpConflict extends HttpClientException {
  static readonly STATUS = 409;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 409, params));
    Object.setPrototypeOf(this, HttpConflict.prototype);
    this.name = className;
  }
}
