import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpBadRequest';

export class HttpBadRequest extends HttpClientException {
  static readonly STATUS = 400;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 400, params));
    Object.setPrototypeOf(this, HttpBadRequest.prototype);
    this.name = className;
  }
}
