import { css } from '@emotion/react';
import type { FC } from 'react';
import { siteConfig } from '@/config';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import LinkedInIcon from '@/public/icons/devicons/linkedin/linkedin-original.svg';
import { FooterCtn } from './styles';

export const Footer: FC = () => {
  return (
    <FooterCtn>
      <div>
        Contact me on
        <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
          <LinkedInIcon
            css={css`
              width: 32px;
              height: 32px;
            `}
          />
          linked.in
        </a>
        <p>No recruiters please !</p>
        <p>
          Want to see the
          <a href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
            <GithubIcon
              css={css`
                width: 32px;
                height: 32px;
              `}
            />
            code
          </a>
          ?
        </p>
      </div>
    </FooterCtn>
  );
};
