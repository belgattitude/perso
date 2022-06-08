import type { PrismaClientDbMain } from '@belgattitude/db-main';
// import { PrismaDbMain } from '@belgattitude/db-main';
import { AbstractCacheableSearchQuery } from '@/backend/lib/query';
import type { CacheKeyGenParams } from '@/backend/lib/query/ICacheableSearchQuery';

type SearchParams = {
  ftQuery?: string;
};

export type SearchPosts = Awaited<ReturnType<SearchPostsQuery['execute']>>;

export class SearchPostsQuery extends AbstractCacheableSearchQuery<SearchParams> {
  readonly queryName = 'SearchPostsQuery';
  cacheParams: CacheKeyGenParams = {
    version: '1.0.0',
  };

  constructor(private readonly prisma: PrismaClientDbMain) {
    super();
  }

  execute = async (params: SearchParams) => {
    const { ftQuery: _ftQuery } = params;
    return this.prisma.post.findMany({
      where: {
        deletedAt: null,
      },
    });
  };
}
