import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpBadRequest';

/**
 * Client status 400
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
export class HttpBadRequest extends HttpClientException {
  static readonly STATUS = 400;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 400, msgOrParams));
    Object.setPrototypeOf(this, HttpBadRequest.prototype);
    this.name = className;
  }
}
