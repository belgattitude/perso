import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnsupportedMediaType';

/**
 * Client status 415
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
export class HttpUnsupportedMediaType extends HttpClientException {
  static readonly STATUS = 415;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 415, msgOrParams));
    Object.setPrototypeOf(this, HttpUnsupportedMediaType.prototype);
    this.name = className;
  }
}
