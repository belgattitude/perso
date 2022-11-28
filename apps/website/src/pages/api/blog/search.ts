import { HttpInternalServerError } from '@httpx/exception';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { prismaDbMain } from '@/backend/config';
import { SearchPostsQuery } from '@/backend/features/blog/SearchPosts.query';
import { withApiErrorHandler } from '@/backend/helpers';
import { getSafeRequest } from '@/backend/lib';
import { assertHttpMethod } from '@/backend/lib/utils';
import { appCache } from '@/config/app-cache.config';

const reqSchema = z.object({
  // method: z.enum(['GET']),
  query: z.object({
    _cache: z.string().optional(),
  }),
});

const apiBlogSearchHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  assertHttpMethod(req, 'GET');

  const { query } = getSafeRequest(req, reqSchema);

  const { _cache: cacheParam = '' } = query;

  const postsQuery = new SearchPostsQuery(prismaDbMain);

  const { data, error, isHit, isSuccess } = await appCache.getOrSet(
    postsQuery.getCacheKey({}),
    async () => postsQuery.execute({}),
    {
      ttl: 3_600,
      disableCache: cacheParam.includes('app-cache:off'),
    }
  );

  if (!isSuccess) {
    throw new HttpInternalServerError({
      message: [
        "Can't retrieve posts",
        error ? `(${error?.message})` : '',
      ].join(','),
      cause: error,
    });
  }

  res.status(200).send(
    JSON.stringify({
      success: true,
      data: data,
      metadata: {
        cacheHit: isHit,
      },
    })
  );
};

export default withApiErrorHandler(apiBlogSearchHandler);
