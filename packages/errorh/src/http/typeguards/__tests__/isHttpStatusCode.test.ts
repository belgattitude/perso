import { isHttpStatusCode } from '../isHttpStatusCode';

describe('isHttpStatusCode', () => {
  it('should return true if status code is valid', () => {
    expect(isHttpStatusCode(101)).toBeTruthy();
    expect(isHttpStatusCode(500)).toBeTruthy();
  });

  it('should return false if status code is valid', () => {
    expect(isHttpStatusCode(600)).toBeFalsy();
  });
});
