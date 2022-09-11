import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotExtended';

export class HttpNotExtended extends HttpServerException {
  static readonly STATUS = 510;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 510, params));
    Object.setPrototypeOf(this, HttpNotExtended.prototype);
    this.name = className;
  }
}
