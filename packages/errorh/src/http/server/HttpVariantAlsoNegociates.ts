import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuperParams } from '../utils';

const className = 'HttpVariantAlsoNegociates';

export class HttpVariantAlsoNegociates extends HttpServerException {
  static readonly STATUS = 506;
  constructor(params?: HttpErrorParams | string) {
    super(getSuperParams(className, 506, params));
    Object.setPrototypeOf(this, HttpVariantAlsoNegociates.prototype);
    this.name = className;
  }
}
