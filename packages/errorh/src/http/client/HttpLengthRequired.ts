import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpLengthRequired';

export class HttpLengthRequired extends HttpServerException {
  static readonly STATUS = 411;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 411, params));
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = className;
  }
}
