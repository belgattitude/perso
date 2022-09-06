import { HttpServerException } from '../base';
import type { HttpErrorParams } from '../types';

export class HttpVariantAlsoNegociates extends HttpServerException {
  static readonly STATUS = 506;
  static readonly REASON = 'Http Variant Also Negociates';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpVariantAlsoNegociates.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpVariantAlsoNegociates.STATUS;
    super({ message, statusCode, url, cause });

    Object.setPrototypeOf(this, HttpVariantAlsoNegociates.prototype);
    this.name = 'HttpVariantAlsoNegociates';
  }
}
