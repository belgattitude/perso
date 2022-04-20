import { css } from '@emotion/react';
import type { FC } from 'react';
import { RepoList } from '@/features/about/components/Github';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import * as S from './styles';

type OpensourceProps = {
  className?: string;
};

export const OpenSourceBlock: FC<OpensourceProps> = (props) => {
  const { className } = props;
  return (
    <S.OpensourceCtn className={className}>
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
    </S.OpensourceCtn>
  );
};
