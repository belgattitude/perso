import { HttpBadRequest } from '../../client';
import { isHttpError } from '../isHttpError';
describe('isHttpError', () => {
  it('should return true if error is instance of HttpError', () => {
    const error = new HttpBadRequest('Bad request');
    expect(isHttpError(error)).toBe(true);
  });

  it('should return false if error is not instance of HttpError', () => {
    expect(isHttpError(new Error())).toBe(false);
  });
});
