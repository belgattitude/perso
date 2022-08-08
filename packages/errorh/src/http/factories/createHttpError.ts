import type { HttpException } from '../base';
import { HttpBadGateway } from '../server';
import type { HttpServerStatusCode } from '../status/serverCodes';
import { serverStatusCodes } from '../status/serverCodes';

export const createHttpError = (
  statusCode: T,
  params?: {
    message?: string;
    cause?: Error;
    url?: string;
  }
): HttpServerStatusCode[T] => {
  return new serverStatusCodes[statusCode](params);
};

const b = createHttpError(502);
