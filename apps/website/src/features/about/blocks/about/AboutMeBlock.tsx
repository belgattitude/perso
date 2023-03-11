import type { FC } from 'react';
import { BlockTitle } from '@/features/about/components/Block';
import * as S from './styles';

export type AboutMeProps = {
  className?: string;
};

export const AboutMeBlock: FC<AboutMeProps> = (props) => {
  const { className } = props;

  return (
    <S.AboutMeCtn className={className}>
      <BlockTitle title={'About me'} />
      <p>
        I'm a developer with more than 15 years experience in{' '}
        <span className="highlight">backend</span>
        and <span className="highlight">frontend</span>. Over the years I
        acquired some acquaintance with best practices, testing, q&a,
        architecture,... and really like to think 'how do we do this ?'. "this"
        being not exclusively related to tech. I live in Brussels, and believe
        that not every{' '}
        <a
          title="Credits #belgiansolutions"
          href={'https://www.instagram.com/p/2ZBIQwIW19/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          solution
        </a>{' '}
        is an answer to a problem ;)
      </p>
    </S.AboutMeCtn>
  );
};
