import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpUpgradeRequired extends HttpClientException {
  static readonly STATUS = 426;
  static readonly REASON = 'Upgrade Required';
  constructor(params?: HttpErrorParams) {
    const { message = HttpUpgradeRequired.REASON, url, cause } = params ?? {};
    const statusCode = HttpUpgradeRequired.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpUpgradeRequired.prototype);
    this.name = 'HttpUpgradeRequired';
  }
}
