import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpVariantAlsoNegociates';

/**
 * Server status 506
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */
export class HttpVariantAlsoNegociates extends HttpServerException {
  static readonly STATUS = 506;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 506, params));
    Object.setPrototypeOf(this, HttpVariantAlsoNegociates.prototype);
    this.name = className;
  }
}
