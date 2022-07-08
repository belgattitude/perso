import { Buffer } from 'node:buffer';
import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  scryptSync,
} from 'node:crypto';
import { DecryptError, EncryptError, WeakPasswordError } from './exception';
import type { IEncryptor } from './IEncryptor';

export type AesEncryptedResult = {
  /** Initialization vector */
  iv: string;
  /** Encrypted data */
  encrypted: string;
};

export class AesCbcEncryptor implements IEncryptor<AesEncryptedResult> {
  readonly #algorithm: string;
  readonly #password: string;
  /** No need for a random salt */
  readonly #salt = 'Aes256CbcEncryptorSalt';

  constructor(password: string) {
    this.ensureValidPassword(password);
    this.#algorithm = 'aes-256-cbc';
    this.#password = password;
  }

  /**
   * @throws EncryptError
   */
  encrypt = (text: string): AesEncryptedResult => {
    try {
      const key = scryptSync(this.#password, this.#salt, 32);
      const iv = randomBytes(8).toString('hex');
      const cipher = createCipheriv(this.#algorithm, key, iv);
      let encrypted = cipher.update(text, 'utf-8', 'hex');
      encrypted += cipher.final('hex');
      return {
        iv,
        encrypted: encrypted,
      };
    } catch (e: unknown) {
      throw new EncryptError(
        `Encryption error: ${
          typeof e === 'string'
            ? e
            : (e as unknown as Error)?.message ?? 'Unknown error'
        }`
      );
    }
  };

  /**
   * @throw DecryptError
   */
  decrypt = ({ encrypted, iv }: AesEncryptedResult): string => {
    const encryptedText = Buffer.from(encrypted, 'hex');
    try {
      const key = scryptSync(this.#password, this.#salt, 32);
      const decipher = createDecipheriv(this.#algorithm, key, iv);
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);
      return decrypted.toString();
    } catch (e: unknown) {
      throw new DecryptError(
        `Decryption error: ${
          typeof e === 'string'
            ? e
            : (e as unknown as Error)?.message ?? 'Unknown error'
        }`
      );
    }
  };

  private ensureValidPassword = (password: string): void => {
    if (
      typeof (password as unknown) !== 'string' ||
      password.trim().length < 1
    ) {
      throw new WeakPasswordError('Password is empty or not a valid string');
    }
  };
}
