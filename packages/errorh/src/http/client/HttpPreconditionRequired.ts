import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPreconditionRequired';

/**
 * Client status 428
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
export class HttpPreconditionRequired extends HttpClientException {
  static readonly STATUS = 428;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 428, msgOrParams));
    Object.setPrototypeOf(this, HttpPreconditionRequired.prototype);
    this.name = className;
  }
}
