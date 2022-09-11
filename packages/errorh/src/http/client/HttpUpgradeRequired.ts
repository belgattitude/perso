import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUpgradeRequired';

/**
 * Client status 426
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
export class HttpUpgradeRequired extends HttpClientException {
  static readonly STATUS = 426;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 426, msgOrParams));
    Object.setPrototypeOf(this, HttpUpgradeRequired.prototype);
    this.name = className;
  }
}
