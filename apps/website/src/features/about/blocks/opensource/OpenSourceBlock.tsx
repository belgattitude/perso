import { css } from '@emotion/react';
import type { FC } from 'react';
import { BlockTitle } from '@/features/about/blocks';
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
      <BlockTitle
        title={'Opensource'}
        subtitle={'Some contributions and examples'}
      />
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
      <RepoList />
    </S.OpensourceCtn>
  );
};
