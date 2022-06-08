import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaDbMain } from '@/backend/config';
import { SearchPostsQuery } from '@/backend/features/blog/SearchPosts.query';
import { appCache } from '@/config/app-cache.config';

export default async function apiBlogSearchRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  const { _cache: cacheParam = '' } = req.query;

  const query = new SearchPostsQuery(prismaDbMain);

  const { data, error, isHit, isSuccess } = await appCache.getOrSet(
    query.getCacheKey({}),
    async () => query.execute({}),
    {
      ttl: 3_600,
      disableCache: cacheParam.includes('app-cache:off'),
    }
  );

  if (isSuccess) {
    /*
    const oneMinute = 60;
    res.setHeader(
      'Cache-Control',
      `public,max-age=${oneMinute * 10},s-maxage=${oneMinute * 30}`
    );
    res.setHeader('Content-Type', 'application/json');
    */
    res.status(200).send(
      JSON.stringify({
        success: true,
        data: data,
        metadata: {
          cacheHit: isHit,
        },
      })
    );
  } else {
    res.status(500).send(error);
  }
}
