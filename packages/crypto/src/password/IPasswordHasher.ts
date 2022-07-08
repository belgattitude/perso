export interface IPasswordHasher {
  hash(password: string): Promise<string> | string;
  verify(password: string, hash: string): Promise<boolean> | boolean;
}
