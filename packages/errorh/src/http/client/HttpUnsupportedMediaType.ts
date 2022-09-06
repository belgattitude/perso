import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpUnsupportedMediaType';

export class HttpUnsupportedMediaType extends HttpClientException {
  static readonly STATUS = 415;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 415, params));
    Object.setPrototypeOf(this, HttpUnsupportedMediaType.prototype);
    this.name = className;
  }
}
