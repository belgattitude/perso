import type {
  CacheKeyGenParams,
  ICacheableSearchQuery,
} from '@/backend/lib/query/ICacheableSearchQuery';

export abstract class AbstractCacheableSearchQuery<TRequestDto, TResponseDto>
  implements ICacheableSearchQuery<TRequestDto, TResponseDto>
{
  abstract readonly queryName: string;
  abstract readonly cacheParams: CacheKeyGenParams;
  abstract execute(params: TRequestDto): Promise<TResponseDto>;

  getCacheKey = (params: TRequestDto): string => {
    const {
      env = undefined,
      commitRef = undefined,
      version,
    } = this.cacheParams;

    const serializableKey = {
      ...params,
      __cacheVersion__: version,
      ...(env ? { __cacheEnv__: env } : {}),
      ...(commitRef ? { __cacheCommitRef__: commitRef } : {}),
    };

    return `${this.queryName}-${env}-{}`;
  };
}
