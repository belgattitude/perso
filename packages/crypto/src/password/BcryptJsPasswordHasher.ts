import bcrypt from 'bcryptjs';
import type { IPasswordHasher } from './IPasswordHasher';

type Params = {
  rounds: number;
};

export class BcryptJsPasswordHasher implements IPasswordHasher {
  constructor(public readonly params: Params) {}
  hash(password: string): string {
    const salt = bcrypt.genSaltSync(this.params.rounds);
    return bcrypt.hashSync(password, salt);
  }
  verify(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
