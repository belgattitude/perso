import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpImATeapot';

/**
 * Client status 418
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
export class HttpImATeapot extends HttpClientException {
  static readonly STATUS = 418;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 418, params));
    Object.setPrototypeOf(this, HttpImATeapot.prototype);
    this.name = 'HttpImATeapot';
  }
}
