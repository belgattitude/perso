import { SimpleAesEncryptor } from '../SimpleAesEncryptor';

describe('SimpleAesEncrytor tests', () => {
  it('should work', () => {
    const password = 'password used to generate key';
    const data = 'a string that is supposed to be encrypted and decrypted';

    const encryptor = new SimpleAesEncryptor(password);
    const result = encryptor.encrypt(data);
    const { iv, encrypted } = result;

    expect(encryptor.decrypt(encrypted, iv)).toStrictEqual(data);
  });
});
