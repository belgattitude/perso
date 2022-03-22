import is from '@sindresorhus/is';
import ky from 'ky';
import { Result } from '@/core/result';

export type RepoItemDTO = {
  id: number;
  name: string;
  description: string;
  private: boolean;
  fork: boolean;
  homepage: string;
  html_url: string;
  stargazers_count: number;
  url: string;
} & {
  custom_tags?: string[];
};
export type RepoItems = RepoItemDTO[];

export default class GithubApi {
  private ky: typeof ky;

  constructor(token?: string) {
    this.ky = ky.create({
      prefixUrl: 'https://api.github.com',
      hooks: {
        beforeRequest: [
          (request): void => {
            if (token) {
              request.headers.set('Authorization', `Bearer ${token}`);
            }
          },
        ],
      },
    });
  }

  async getMyRepos(props: {
    githubQuery: string;
    signal?: AbortSignal | null;
    filterOnly?: Array<[string, string[]]>;
  }): Promise<Result<RepoItemDTO[]>> {
    const { filterOnly = [], githubQuery } = props;
    return (
      this.ky
        // Specific github syntax, using URLParams encoding won't work ;)
        .get(githubQuery, {
          retry: 1,
          signal: props.signal,
        })
        .json()
        .then((response) => {
          if (this.isValidRepoResponse(response)) {
            const { items } = response;

            if (filterOnly.length > 0) {
              // Filtering by order of filterOnly
              const filtered: RepoItems = [];
              for (const [name, techs] of filterOnly) {
                const repo = items.find((item) => item.name === name);
                if (repo) {
                  filtered.push({ ...repo, custom_tags: techs });
                }
              }
              return Result.ok<RepoItems>(filtered);
            }
            return Result.ok<RepoItems>(items);
          }
          return Result.fail<RepoItems>(
            `Returned response shape is not supported`
          );
        })
        .catch((e) => Result.fail<RepoItems>(e))
    );
  }

  static createFromDefaults(): GithubApi {
    return new GithubApi();
  }

  /**
   * Very basic typeguard
   */
  private isValidRepoResponse(
    response: unknown
  ): response is { items: RepoItemDTO[] } {
    return is.plainObject(response) && is.array(response.items);
  }
}
