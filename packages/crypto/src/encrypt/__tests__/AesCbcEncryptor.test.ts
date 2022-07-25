import { AesCbcEncryptor } from '../AesCbcEncryptor';
import { DecryptError, WeakPasswordError } from '../exception';

describe('AesCbcEncryptor tests', () => {
  describe('constructor', () => {
    it('should throw WeakPasswordError when empty password', () => {
      expect(() => new AesCbcEncryptor('')).toThrowError(WeakPasswordError);
    });
  });

  describe('decrypt', () => {
    it('should decrypt encrypted data', () => {
      const password = 'password used to generate key';
      const data = 'something-utf8-é😀';
      const encryptor = new AesCbcEncryptor(password);
      expect(encryptor.decrypt(encryptor.encrypt(data))).toStrictEqual(data);
    });

    it('should throw DecryptError if the password is invalid', () => {
      const data = 'something-utf8-é😀';
      const encryptor1 = new AesCbcEncryptor('password1');
      const encryptor2 = new AesCbcEncryptor('password2');
      expect(() => encryptor2.decrypt(encryptor1.encrypt(data))).toThrow(
        DecryptError
      );
    });

    it('should throw DecryptError if the iv is invalid', () => {
      const password = 'password used to generate key';
      const data = 'something-utf8-é😀';
      const encryptor = new AesCbcEncryptor(password);
      const result = encryptor.encrypt(data);
      const { encrypted } = result;
      const invalidInitializationVector = '95e8';
      expect(() =>
        encryptor.decrypt({ encrypted, iv: invalidInitializationVector })
      ).toThrow(DecryptError);
    });
  });
});
