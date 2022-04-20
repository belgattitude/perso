import { css, ThemeProvider } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import type { FC } from 'react';
import { mdxConfig, siteConfig, appClassName } from '@/config';
import {
  ProfileHero,
  AboutMe,
  Opensource,
  Features,
} from '@/features/about/blocks';
import { Block } from '@/features/about/blocks/block';
import type { TechnosProps } from '@/features/about/blocks/technos/technos';
import { defaultTheme } from '@/themes';
import { Footer } from '../layouts/resume/Footer';

const Technos = dynamic<TechnosProps>(
  () =>
    import('@/features/about/blocks/technos/technos').then(
      (mod) => mod.Technos
    ),
  {
    ssr: false,
  }
);

export const ResumePage: FC = () => {
  return (
    <div css={appClassName}>
      <Head>
        <title>{siteConfig.siteTitle}</title>
        <meta name="description" content={siteConfig.siteDesc} />
        <meta property="og:url" content={siteConfig.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.siteTitle} />
        <meta property="og:description" content={siteConfig.siteDesc} />
        <meta property="og:image" content={siteConfig.siteImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.siteTitle} />
        <meta name="twitter:description" content={siteConfig.siteDesc} />
        <meta name="twitter:image" content={siteConfig.siteImg} />
        <NextSeo nofollow={true} noindex={true} />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <MDXProvider components={mdxConfig}>
          <ProfileHero
          // avatarImg={siteConfig.profileImg}
          />
          <Block
            css={css`
              margin-top: 3.5em;
            `}
          >
            <AboutMe />
          </Block>
          <Block>
            <Features
              css={css`
                background-color: #fefefe;
              `}
            />
          </Block>
          <Block>
            <Technos />
          </Block>
          <Block>
            <Opensource />
          </Block>
          <Footer>
            Contact me on
            <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
              &nbsp; &nbsp;linked.in
            </a>
            <p>No recruiters please !</p>
            <p>
              Want to see the
              <a href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
                &nbsp; &nbsp;code&nbsp;
              </a>
              ?
            </p>
          </Footer>
        </MDXProvider>
      </ThemeProvider>
    </div>
  );
};
