import { css } from '@emotion/react';
import type { FC } from 'react';

import type { GetGithubRepos } from '@/features/about/api/getGithubRepos';
import { RepoTag } from '@/features/about/components/Github/RepoTag';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import { truncateText } from '../../../../../utils/utils';
import { RepoItemCtn } from './styles';

export const RepoItem: FC<{
  className?: string;
  repo: GetGithubRepos[0];
  limitChars?: number;
}> = (props) => {
  const { repo, className, limitChars = 40 } = props;
  return (
    <RepoItemCtn className={className}>
      <div>
        {repo.name}
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          <GithubIcon
            css={css`
              width: 20px;
              height: 20px;
              float: right;
              &:hover {
                filter: blur(2px);
              }
            `}
          />
        </a>

        <p>{truncateText(repo.description ?? '', limitChars, false)}</p>
        {(repo.customTags || []).map((label) => (
          <RepoTag key={label} title={label} />
        ))}
      </div>
      <div>
        <div>{repo.stargazerCount}</div>
        <div>
          <i className="fas fa-star" />
        </div>
      </div>
    </RepoItemCtn>
  );
};
