import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpGone';

/**
 * Client status 410
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
export class HttpGone extends HttpClientException {
  static readonly STATUS = 410;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 410, params));
    Object.setPrototypeOf(this, HttpGone.prototype);
    this.name = className;
  }
}
