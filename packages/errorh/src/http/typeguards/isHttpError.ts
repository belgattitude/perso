import { HttpError } from '../base/HttpError';

export const isHttpError = (error: unknown): error is HttpError => {
  return error instanceof HttpError;
};
