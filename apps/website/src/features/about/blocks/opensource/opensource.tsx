import type { FC } from 'react';
import GithubIcon from '@/assets/icons/social/github.svg';
import { OpensourceCtn } from '@/features/about/blocks/opensource/opensource.style';
import { GithubRepoList } from '@/features/about/components/Github';

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
          <GithubIcon />
        </a>
      </h1>
      <h1>Opensource</h1>
      <h2>Some code I committed once upon a time...</h2>
      <GithubRepoList />
    </OpensourceCtn>
  );
};
