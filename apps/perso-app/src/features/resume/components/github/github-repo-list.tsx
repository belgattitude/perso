import styled from '@emotion/styled';
import { FC } from 'react';
import { GithubRepo } from './github-repo';
import { useQuery } from 'react-query';
import { getGithubRepos } from '@/features/resume/api/getGithubRepos';

export type GithubRepoListProps = {
  className?: string;
  children?: never;
};

const UnstyledGithubRepoList: FC<GithubRepoListProps> = (props) => {
  const { className } = props;
  const { isError, isLoading, data } = useQuery(
    'getGithubRepos',
    getGithubRepos
  );

  if (isLoading) {
    return <div className={className}>Loading...</div>;
  }

  if (isError) {
    return <div className={className}>Cannot reach github, please retry.</div>;
  }

  return (
    <div className={className}>
      <ul>
        {data?.map((repoData) => {
          return (
            <li key={repoData.name}>
              <GithubRepo repo={repoData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const GithubRepoList = styled(UnstyledGithubRepoList)`
  margin: 0;
  padding: 0;
  line-height: 1em;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      border-bottom: 1px solid #eeeeee;
      margin: 0;
      padding: 5px 5px 5px;
      display: flex;
      :last-of-type {
        border-bottom: none;
      }
    }
  }
`;
