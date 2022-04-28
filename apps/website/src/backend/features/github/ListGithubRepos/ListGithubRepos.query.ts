import type { UnPromisify } from '@belgattitude/ts-utils';
import { graphql } from '@octokit/graphql';
import type { Repository } from '@octokit/graphql-schema';
import type { SearchQuery } from '@/backend/lib/query';

export type ListGithubRepos = UnPromisify<
  ReturnType<ListGithubReposQuery['execute']>
>;

export type GraphqlGetGithubRepos = UnPromisify<
  ReturnType<ListGithubReposQuery['getGithubRepos']>
>;

export class ListGithubReposQuery
  implements SearchQuery<never, ListGithubRepos>
{
  readonly queryName = 'ListGithubReposQuery';

  constructor(private readonly githubToken: string) {}

  execute = async () => {
    return this.mapToApi(await this.getGithubRepos()).filter(
      (repo) => repo.visibility === 'PUBLIC' && !repo.isFork
    );
  };

  private mapToApi = (repos: GraphqlGetGithubRepos) => {
    return repos.viewer.repositories.nodes.map((repo) => {
      return {
        name: repo.name,
        description: repo.description,
        title: repo.description,
        url: repo.url,
        homepageUrl: repo.homepageUrl,
        stargazerCount: repo.stargazerCount,
        primaryLanguage: repo.primaryLanguage?.name,
        forkCount: repo.forkCount,
        createdAt: repo.createdAt,
        updatedAt: repo.updatedAt,
        isFork: repo.isFork,
        visibility: repo.visibility,
      };
    });
  };

  getGithubRepos = async () => {
    return graphql<{ viewer: { repositories: { nodes: Repository[] } } }>(
      `
        {
          viewer {
            repositories(
              first: 100
              affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
              ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
              privacy: PUBLIC
              orderBy: { field: STARGAZERS, direction: DESC }
              isFork: false
            ) {
              totalCount
              nodes {
                name
                nameWithOwner
                url
                description

                homepageUrl
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                }
                isInOrganization
                visibility
                isFork
                diskUsage
                licenseInfo {
                  spdxId
                }
                viewerHasStarred
                viewerCanAdminister
                viewerPermission
                repositoryTopics(first: 20) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                languages(
                  first: 100
                  orderBy: { field: SIZE, direction: DESC }
                ) {
                  totalSize
                  edges {
                    size
                    node {
                      name
                      id
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `bearer ${this.githubToken}`,
        },
      }
    );
  };
}
