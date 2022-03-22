import styled from '@emotion/styled';
import type { FC } from 'react';

type AboutMeProps = {
  className?: string;
  children?: never;
};

const UnstyledAboutMe: FC<AboutMeProps> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <h1 className={'font-serif text-4xl'}>About me</h1>
      <p>
        I'm a passionate developer with more than 15 years experience in backend
        and frontend technologies. Over the years I acquired some acquaintance
        with best practices, testing, q&a, architecture,... and really like to
        think 'how do we do this ?'. "this" being not exclusively related to
        tech. I live in Brussels, and believe that not every{' '}
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
    </div>
  );
};

export const AboutMe = styled(UnstyledAboutMe)<AboutMeProps>`
  a,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    padding: 0;
  }
`;
