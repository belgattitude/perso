import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

/**
 * InsufficientStorage is specific to webdav.
 */
export class HttpInsufficientStorage extends HttpException {
  static readonly STATUS = 507;
  static readonly REASON = 'Insufficient Storage';
  constructor(params?: HttpErrorParams) {
    const {
      message = HttpInsufficientStorage.REASON,
      url,
      cause,
    } = params ?? {};
    const statusCode = HttpInsufficientStorage.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpInsufficientStorage.prototype);
    this.name = 'HttpInsufficientStorage';
  }
}
