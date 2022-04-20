import type { FC } from 'react';
import { useQuery } from 'react-query';
import { getGithubRepos } from '@/features/about/api/getGithubRepos';
import { RepoItem } from '../RepoItem';
import { RepoListCtn } from './styles';

export type RepoListProps = {
  className?: string;
};

export const RepoList: FC<RepoListProps> = (props) => {
  const { className } = props;
  const { isError, isLoading, data } = useQuery(
    ['getGithubRepos'],
    getGithubRepos
  );

  if (isLoading) {
    return <div className={className}>Loading...</div>;
  }

  if (isError) {
    return <div className={className}>Cannot reach github, please retry.</div>;
  }

  return (
    <RepoListCtn className={className}>
      <ul>
        {data?.map((repoData) => {
          return (
            <li key={repoData.name}>
              <RepoItem repo={repoData} />
            </li>
          );
        })}
      </ul>
    </RepoListCtn>
  );
};
