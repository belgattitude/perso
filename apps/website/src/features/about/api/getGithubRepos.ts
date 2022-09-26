import type { UnPromisify } from '@belgattitude/ts-utils';
import type { ListGithubRepos } from '@/backend/features/github/ListGithubRepos';
import { filteredRepos } from '@/features/about/config';
import type { JsonApiResponse } from '@/lib/api/json-api';
import { safeAxios } from '@/lib/fetch/safeAxios';

export type GetGithubRepos = UnPromisify<ReturnType<typeof getGithubRepos>>;

export const getGithubRepos = async () => {
  const data = await safeAxios
    .get<JsonApiResponse<ListGithubRepos>>('/api/github/prjects', {
      responseType: 'json',
    })
    .then((res) => res.data.data);

  const filtered = [];
  for (const [name, techs] of filteredRepos) {
    const repo = data.find((repo) => repo.name === name);
    if (repo) {
      filtered.push({ ...repo, customTags: techs });
    }
  }
  return filtered;
};
