import { HttpBadRequest } from '../../client';
import { isHttpException } from '../isHttpException';

describe('isHttpException', () => {
  it('should return true if error is instance of HttpError', () => {
    const error = new HttpBadRequest('Bad request');
    expect(isHttpException(error)).toBe(true);
  });

  it('should return false if error is not instance of HttpError', () => {
    expect(isHttpException(new Error())).toBe(false);
  });
});
