import { createHash } from 'node:crypto';
import type { ICacheKeyGenerator } from '@/backend/lib/cache/ICacheKeyGenerator';
import type { IDTO } from '@/backend/lib/dto';
import { DTOSerializer } from '@/backend/lib/dto';

export type ShaCacheKeyGenerateOptions = {
  /** Hash algorithm */
  algorithm: 'sha256' | 'sha512';
};

const defaultOptions: ShaCacheKeyGenerateOptions = {
  /** sha256 should give enough confidence regarding collisions within a
   * relatively small length */
  algorithm: 'sha256',
};

export class ShaCacheKeyGenerator implements ICacheKeyGenerator {
  private options: ShaCacheKeyGenerateOptions;
  private dtoSerializer: DTOSerializer;

  constructor(options?: ShaCacheKeyGenerateOptions) {
    this.options = { ...defaultOptions, ...(options ?? {}) };
    this.dtoSerializer = new DTOSerializer();
  }

  createHash = (str: string): string => {
    return createHash(this.options.algorithm)
      .update(str, 'utf-8')
      .digest('hex');
  };
}
