import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpVersionNotSupported';

/**
 * Server status 505
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
export class HttpVersionNotSupported extends HttpServerException {
  static readonly STATUS = 505;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 505, msgOrParams));
    Object.setPrototypeOf(this, HttpVersionNotSupported.prototype);
    this.name = className;
  }
}
