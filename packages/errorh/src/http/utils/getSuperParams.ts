import type { HttpExceptionParams } from '../base/HttpException';
import type { HttpErrorParams } from '../types';
import { getMsgFromName } from './getMsgFromName';

export const getSuperParams = (
  className: string,
  statusCode: number,
  params?: HttpErrorParams | string
): HttpExceptionParams => {
  const p = typeof params === 'string' ? { message: params } : params;
  const { message = getMsgFromName(className), url, cause } = p ?? {};
  return { statusCode, message, url, cause };
};
