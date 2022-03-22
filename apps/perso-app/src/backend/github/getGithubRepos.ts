import { graphql } from '@octokit/graphql';
import type { Repository } from '@octokit/graphql-schema';

export async function getGithubRepos() {
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
              languages(first: 100, orderBy: { field: SIZE, direction: DESC }) {
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
        authorization: `token ${process.env.GITHUB_GRAPHQL_TOKEN}`,
      },
    }
  );
}
