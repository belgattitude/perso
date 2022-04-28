import type { UnPromisify } from '@belgattitude/ts-utils';
import axios from 'axios';
import type { ListGithubRepos } from '@/backend/features/github/ListGithubRepos';
import { filteredRepos } from '@/config';
import type { JsonApiResponse } from '@/lib/api/json-api';

export type GetGithubRepos = UnPromisify<ReturnType<typeof getGithubRepos>>;

export const getGithubRepos = async () => {
  const data = await axios
    .get<JsonApiResponse<ListGithubRepos>>('/api/github/projects', {
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
