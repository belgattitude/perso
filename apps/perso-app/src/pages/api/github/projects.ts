import type { NextApiRequest, NextApiResponse } from 'next';
import { getGithubRepos } from '@/backend/github/getGithubRepos';
import { appCache } from '@/config/app-cache.config';
import { ListGithubReposQuery } from '@/backend/query/ListGithubRepos/ListGithubRepos.query';

async function getViewerGithubRepos() {
  /**
  const data = await getGithubRepos(
    process.env.GITHUB_GRAPHQL_TOKEN as unknown as string
  );
   */
  const query = new ListGithubReposQuery(
    process.env.GITHUB_GRAPHQL_TOKEN as unknown as string
  );
  const data = await query.execute();
  return data;

  return data.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      homepageUrl: repo.homepageUrl,
      stargazerCount: repo.stargazerCount,
      primaryLanguage: repo.primaryLanguage,
      forkCount: repo.forkCount,
      url: repo.url,
      createdAt: repo.createdAt,
      updatedAt: repo.updatedAt,
      isFork: repo.isFork,
      visibility: repo.visibility,
    };
  });
}

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
