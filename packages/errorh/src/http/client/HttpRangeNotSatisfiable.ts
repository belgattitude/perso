import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpRangeNotSatisfiable';

export class HttpRangeNotSatisfiable extends HttpClientException {
  static readonly STATUS = 416;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 416, params));
    Object.setPrototypeOf(this, HttpRangeNotSatisfiable.prototype);
    this.name = className;
  }
}
