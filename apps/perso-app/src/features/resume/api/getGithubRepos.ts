import axios from 'axios';
import type { ListGithubRepos } from '@/backend/query/ListGithubRepos/ListGithubRepos.query';
import { filteredRepos } from '@/config';
import type { JsonApiResponse } from '@/core/api/json-api/JsonApiResponse';
import type { UnPromisify } from '@/core/type-utils/type-utils';

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
