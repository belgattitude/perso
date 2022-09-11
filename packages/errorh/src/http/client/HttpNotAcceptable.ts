import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotAcceptable';

/**
 * Client status 406
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
export class HttpNotAcceptable extends HttpClientException {
  static readonly STATUS = 406;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 406, msgOrParams));
    Object.setPrototypeOf(this, HttpNotAcceptable.prototype);
    this.name = className;
  }
}
