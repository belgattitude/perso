import { css } from '@emotion/react';
import type { FC } from 'react';
import { OpensourceCtn } from '@/features/about/blocks/opensource/opensource.style';
import { RepoList } from '@/features/about/components/Github';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';

type OpensourceProps = {
  className?: string;
};

export const Opensource: FC<OpensourceProps> = (props) => {
  const { className } = props;
  return (
    <OpensourceCtn className={className}>
      <h1>
        <a
          href={'https://github.com/belgattitude'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <GithubIcon
            css={css`
              width: 64px;
              height: 64px;
            `}
          />
        </a>
      </h1>
      <h1>Opensource</h1>
      <h2>Some code I committed once upon a time...</h2>
      <RepoList />
    </OpensourceCtn>
  );
};
