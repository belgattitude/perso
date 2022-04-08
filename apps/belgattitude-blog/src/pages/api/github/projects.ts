import type { NextApiRequest, NextApiResponse } from 'next';
import { ListGithubReposQuery } from '@/backend/features/github/ListGithubRepos';
import { appCache } from '@/config/app-cache.config';

export default async function apiGithubProjectsRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  const { _cache = null } = req.query;

  const query = new ListGithubReposQuery(
    process.env.GITHUB_GRAPHQL_TOKEN as unknown as string
  );

  const { data, error, isHit, isSuccess } = await appCache.getOrSet(
    'ListGithubRepos',
    query.execute,
    {
      ttl: 3_600,
      disableCache: _cache === 'app-cache:off',
    }
  );

  if (isSuccess) {
    res.status(200).send(
      JSON.stringify(
        {
          success: true,
          data: data,
          metadata: {
            cacheHit: isHit,
          },
        },
        null,
        2
      )
    );
  } else {
    res.status(500).send(error);
  }
}
