import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import type { IPasswordHasher } from './IPasswordHasher';

type Params = {
  rounds: number;
};

export class BcryptJsPasswordHasher implements IPasswordHasher {
  constructor(public readonly params: Params) {}
  hash = (password: string): string => {
    const salt = genSaltSync(this.params.rounds);
    return hashSync(password, salt);
  };
  verify = (password: string, hash: string): boolean => {
    return compareSync(password, hash);
  };
}
