import type { HttpStatusCode } from '../types';

/**
 * Check if the provided value is a valid http status code
 */
export const isHttpErrorStatusCode = (
  statusCode: unknown
): statusCode is HttpStatusCode => {
  if (typeof statusCode !== 'number') {
    return false;
  }
  return statusCode >= 400 && statusCode < 600;
};
