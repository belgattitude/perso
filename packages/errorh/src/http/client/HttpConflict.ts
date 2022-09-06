import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpConflict';

export class HttpConflict extends HttpClientException {
  static readonly STATUS = 409;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 409, params));
    Object.setPrototypeOf(this, HttpConflict.prototype);
    this.name = className;
  }
}
