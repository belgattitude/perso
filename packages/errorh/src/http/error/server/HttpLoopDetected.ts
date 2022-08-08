import { HttpException } from '../base';
import type { HttpErrorParams } from '../types';

/**
 * LoopDetected is specific to webdav.
 */
export class HttpLoopDetected extends HttpException {
  static readonly STATUS = 508;
  static readonly REASON = 'Loop Detected';
  constructor(params?: HttpErrorParams) {
    const { message = HttpLoopDetected.REASON, url, cause } = params ?? {};
    const statusCode = HttpLoopDetected.STATUS;
    super({ message, statusCode, url, cause });
    Object.setPrototypeOf(this, HttpLoopDetected.prototype);
    this.name = 'HttpLoopDetected';
  }
}
