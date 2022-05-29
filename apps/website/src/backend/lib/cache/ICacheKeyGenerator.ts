export interface ICacheKeyGenerator {
  createHash(str: string): string;
}
