import type { IDTO } from '@/backend/lib/dto';
import type { IQuery } from './IQuery';

export type CacheKeyGenParams = {
  /**
   * Declare version of the query implementation.
   */
  version: string;
  /**
   * Optional commit ref
   */
  commitRef?: string;
  /**
   * Optional environment
   */
  env?: 'development' | 'production' | 'staging';
};

export interface ICacheableSearchQuery<TRequestDto extends IDTO>
  extends IQuery<TRequestDto> {
  readonly queryName: string;
  readonly cacheParams: CacheKeyGenParams;

  /**
   * Get computed cacheKey from cache Params
   */
  getCacheKey(params: TRequestDto): string;
}
