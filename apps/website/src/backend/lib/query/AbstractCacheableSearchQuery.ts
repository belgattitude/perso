import type { ICacheKeyGenerator } from '@/backend/lib/cache';
import { ShaCacheKeyGenerator } from '@/backend/lib/cache';
import type { IDTO } from '@/backend/lib/dto';
import { DTOSerializer } from '@/backend/lib/dto';
import type {
  CacheKeyGenParams,
  ICacheableSearchQuery,
} from '@/backend/lib/query/ICacheableSearchQuery';
import type { ResponseDto } from '@/backend/lib/query/IQuery';

export abstract class AbstractCacheableSearchQuery<TRequestDto extends IDTO>
  implements ICacheableSearchQuery<TRequestDto>
{
  cacheKeyGenerator: ICacheKeyGenerator;
  dtoSerializer: DTOSerializer;

  constructor() {
    this.cacheKeyGenerator = new ShaCacheKeyGenerator({
      algorithm: 'sha256',
    });
    this.dtoSerializer = new DTOSerializer();
  }

  abstract readonly queryName: string;
  abstract readonly cacheParams: CacheKeyGenParams;
  abstract execute(params: TRequestDto): Promise<unknown>;

  getCacheKey = (requestDTO: TRequestDto | undefined): string => {
    const {
      env = undefined,
      commitRef = undefined,
      version,
    } = this.cacheParams;

    const hash = this.cacheKeyGenerator.createHash(
      this.dtoSerializer.stringify({
        ...(requestDTO ?? {}),
        __cacheVersion__: version,
        ...(env ? { __cacheEnv__: env } : {}),
        ...(commitRef ? { __cacheCommitRef__: commitRef } : {}),
      })
    );

    return `${this.queryName}-${hash}`;
  };
}
