import { HttpClientException } from '../base';
import { HttpErrorParams } from '../types';

export class HttpProxyAuthentificationRequired extends HttpClientException {
  static readonly STATUS = 407;
  static readonly REASON = 'Proxy Authentification Required';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpProxyAuthentificationRequired.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpProxyAuthentificationRequired.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpProxyAuthentificationRequired.prototype);
    this.name = 'HttpProxyAuthentificationRequired';
  }
}
