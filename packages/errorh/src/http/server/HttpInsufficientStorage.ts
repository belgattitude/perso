import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpInsufficientStorage';

/**
 * InsufficientStorage is specific to webdav.
 */
export class HttpInsufficientStorage extends HttpServerException {
  static readonly STATUS = 507;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 507, params));
    Object.setPrototypeOf(this, HttpInsufficientStorage.prototype);
    this.name = className;
  }
}
