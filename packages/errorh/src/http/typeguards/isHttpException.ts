import { HttpException } from '../base/HttpException';

export const isHttpException = (error: unknown): error is HttpException => {
  return error instanceof HttpException;
};
