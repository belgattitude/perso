import type { NextApiRequest, NextApiResponse } from 'next';
import { getGithubRepos } from '@/backend/github/getGithubRepos';
import { appCache } from '@/config/app-cache.config';

async function getViewerGithubRepos() {
  const data = await getGithubRepos();
  const repos = data.viewer.repositories.nodes;
  return repos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      homepageUrl: repo.homepageUrl,
      stargazerCount: repo.stargazerCount,
      primaryLanguage: repo.primaryLanguage?.name,
      forkCount: repo.forkCount,
      url: repo.projectsUrl,
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
  const data = await appCache.getOrSet(
    'getViewerGithubRepos',
    getViewerGithubRepos,
    {
      ttl: 3_600,
      disableCache: _cache === 'app-cache:off',
    }
  );

  res.status(200).send(JSON.stringify(data, null, 2));
}
