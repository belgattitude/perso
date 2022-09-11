import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnprocessableEntity';

/**
 * Client status 422
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export class HttpUnprocessableEntity extends HttpClientException {
  static readonly STATUS = 422;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 422, msgOrParams));
    Object.setPrototypeOf(this, HttpUnprocessableEntity.prototype);
    this.name = className;
  }
}
