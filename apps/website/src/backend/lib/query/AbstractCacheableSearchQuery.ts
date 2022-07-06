import type { ICacheKeyGenerator } from '@/backend/lib/cache';
import { ShaCacheKeyGenerator } from '@/backend/lib/cache';
import type { IDTO } from '@/backend/lib/dto';
import { DTOSerializer } from '@/backend/lib/dto';
import type {
  CacheKeyGenParams,
  ICacheableSearchQuery,
} from '@/backend/lib/query/ICacheableSearchQuery';

export abstract class AbstractCacheableSearchQuery<
  TRequestDto extends IDTO | undefined
> implements ICacheableSearchQuery<TRequestDto>
{
  abstract readonly queryName: string;
  abstract readonly cacheParams: CacheKeyGenParams;

  protected cacheKeyGenerator: ICacheKeyGenerator;
  protected dtoSerializer: DTOSerializer;

  constructor() {
    this.cacheKeyGenerator = new ShaCacheKeyGenerator({
      algorithm: 'sha256',
    });
    this.dtoSerializer = new DTOSerializer();
  }

  abstract execute(params: TRequestDto): Promise<unknown>;

  getCacheKey = <T extends TRequestDto = TRequestDto>(
    requestDTO: T,
    extras?: Record<string, string>
  ): string => {
    const {
      env = undefined,
      commitRef = undefined,
      version,
      extraKeys = undefined,
    } = this.cacheParams;

    const hash = this.cacheKeyGenerator.createHash(
      this.dtoSerializer.stringify({
        ...(requestDTO ?? {}),
        ...(extras ?? {}),
        __cacheVersion__: version,
        ...(env ? { __cacheEnv__: env } : {}),
        ...(commitRef ? { __cacheCommitRef__: commitRef } : {}),
        ...(extraKeys
          ? {
              __extraKeys__: extraKeys,
            }
          : {}),
      })
    );

    return `${this.queryName}-${hash}`;
  };
}
