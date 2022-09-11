import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpFailedDependency';

/**
 * Http client status 424 (webdav specific)
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export class HttpFailedDependency extends HttpClientException {
  static readonly STATUS = 424;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 424, params));
    Object.setPrototypeOf(this, HttpFailedDependency.prototype);
    this.name = className;
  }
}
