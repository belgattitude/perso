import { Buffer } from 'node:buffer';
import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  scryptSync,
} from 'node:crypto';

type EncryptedResult = {
  iv: string;
  encrypted: string;
};

export class SimpleAesEncryptor {
  readonly #algorithm: string;
  readonly #password: string;
  /** No need for a random salt */
  readonly #salt = 'SimpleAesEncryptorSalt';

  constructor(password: string) {
    this.#algorithm = 'aes-256-cbc';
    this.#password = password;
  }

  encrypt = (text: string): EncryptedResult => {
    const key = scryptSync(this.#password, this.#salt, 32);
    const iv = randomBytes(8).toString('hex');
    const cipher = createCipheriv(this.#algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return {
      iv,
      encrypted,
    };
  };

  decrypt = (encrypted: string, iv: string): string => {
    const encryptedText = Buffer.from(encrypted, 'hex');
    const key = scryptSync(this.#password, this.#salt, 32);
    const decipher = createDecipheriv(this.#algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  };
}
