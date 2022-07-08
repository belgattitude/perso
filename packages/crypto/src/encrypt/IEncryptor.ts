export interface IEncryptor<T> {
  /**
   * @throws EncryptError
   */
  encrypt(text: string): T;

  /**
   * @throws DecryptError
   */
  decrypt(encrypted: T): string;
}
