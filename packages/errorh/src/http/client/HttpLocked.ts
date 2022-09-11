import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpLocked';

/**
 * Client status 423 (webdav specific)
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export class HttpLocked extends HttpClientException {
  static readonly STATUS = 423;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 423, msgOrParams));
    Object.setPrototypeOf(this, HttpLocked.prototype);
    this.name = className;
  }
}
