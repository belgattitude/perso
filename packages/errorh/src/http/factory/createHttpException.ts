import { HttpClientException, HttpServerException } from '../base';
import { statusMap } from '../status';
import { isHttpErrorStatusCode } from '../typeguards';
import type { HttpErrorParams } from '../types';

export const createHttpException = (
  statusCode: number,
  msgOrParams?: string | HttpErrorParams
): HttpServerException | HttpClientException | null => {
  if (isHttpErrorStatusCode(statusCode)) {
    const cls =
      statusMap?.[`${statusCode}` as unknown as keyof typeof statusMap];
    if (cls) {
      return new cls(msgOrParams);
    }
    const p =
      typeof msgOrParams === 'string'
        ? { message: msgOrParams, statusCode }
        : {
            ...msgOrParams,
            statusCode,
          };
    return statusCode < 500
      ? new HttpClientException(p)
      : new HttpServerException(p);
  }
  return null;
};
