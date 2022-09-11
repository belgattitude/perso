import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnprocessableEntity';

export class HttpUnprocessableEntity extends HttpClientException {
  static readonly STATUS = 422;
  constructor(params?: HttpErrorParams | string) {
    super(getSuper(className, 422, params));
    Object.setPrototypeOf(this, HttpUnprocessableEntity.prototype);
    this.name = className;
  }
}
