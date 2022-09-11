import { HttpClientException, HttpServerException } from '../base';
import { statusMap } from '../status';
import { isHttpErrorStatusCode } from '../typeguards';

export const createHttpException = (
  statusCode: number,
  params: string
): HttpServerException | HttpClientException | null => {
  if (isHttpErrorStatusCode(statusCode)) {
    const cls =
      statusMap?.[`${statusCode}` as unknown as keyof typeof statusMap];
    if (cls) {
      return new cls(params);
    }
    if (statusCode < 500) {
      return new HttpClientException({
        statusCode,
      });
    }
    return new HttpServerException({
      statusCode,
    });
  }
  return null;
};
