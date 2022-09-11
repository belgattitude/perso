import type { HttpExceptionParams } from '../base/HttpException';
import type { HttpErrorParams } from '../types';
import { getMsgFromCls } from './getMsgFromCls';

/**
 * Return params applicable to parent HttpException class
 * when calling super();
 * @internal
 */
export const getSuper = (
  className: string,
  statusCode: number,
  params?: HttpErrorParams | string
): HttpExceptionParams => {
  const p = typeof params === 'string' ? { message: params } : params;
  const { message = getMsgFromCls(className), url, cause } = p ?? {};
  return { statusCode, message, url, cause };
};
