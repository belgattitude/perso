import { BcryptJsPasswordHasher } from '../BcryptJsPasswordHasher';

describe('BcryptJsPasswordHasher tests', () => {
  it('should hash password', () => {
    const pwd = 'password';
    const hasher = new BcryptJsPasswordHasher({ rounds: 5 });
    expect(hasher.verify(pwd, hasher.hash(pwd))).toBeTruthy();
  });
});
