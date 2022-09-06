import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpBadMapping';

export class HttpBadMapping extends HttpClientException {
  static readonly STATUS = 421;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 421, params));
    Object.setPrototypeOf(this, HttpBadMapping.prototype);
    this.name = className;
  }
}
