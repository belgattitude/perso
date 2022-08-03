import type { HttpStatusCode } from '../types';

export const isHttpStatusCode = (
  statusCode: number
): statusCode is HttpStatusCode => {
  return statusCode > 99 && statusCode < 600;
};
