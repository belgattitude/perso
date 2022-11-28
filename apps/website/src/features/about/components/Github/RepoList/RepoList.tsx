import { isHttpException } from '@httpx/exception';
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
  const { isError, isLoading, data, error } = useQuery(
    ['getGithubRepos'],
    getGithubRepos
  );

  if (isLoading) {
    return <div className={className}>Loading...</div>;
  }

  if (isError) {
    return (
      <div className={className}>
        <div>Cannot reach github, please retry.</div>
        {isHttpException(error) && (
          <p>
            <em>{`${error.statusCode} ${error.message}`}</em>
          </p>
        )}
      </div>
    );
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
