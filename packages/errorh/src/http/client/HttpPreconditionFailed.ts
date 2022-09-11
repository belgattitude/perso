import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPreconditionFailed';

/**
 * Client status 412
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
export class HttpPreconditionFailed extends HttpClientException {
  static readonly STATUS = 412;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 412, params));
    Object.setPrototypeOf(this, HttpPreconditionFailed.prototype);
    this.name = className;
  }
}
