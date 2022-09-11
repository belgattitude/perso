import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotExtended';

/**
 * Server status 510
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
 */
export class HttpNotExtended extends HttpServerException {
  static readonly STATUS = 510;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 510, msgOrParams));
    Object.setPrototypeOf(this, HttpNotExtended.prototype);
    this.name = className;
  }
}
