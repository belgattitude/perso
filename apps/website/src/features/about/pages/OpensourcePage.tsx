import { css, ThemeProvider } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { mdxConfig, appClassName } from '@/config';
import {
  HeroBlock,
  AboutMeBlock,
  OpenSourceBlock,
  Block,
} from '@/features/about/blocks';
import { defaultTheme } from '@/themes';
import { pageConfig } from '../config/page.config';

export const OpensourcePage: FC = () => {
  return (
    <div css={appClassName}>
      <Head>
        <title>{pageConfig.siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pageConfig.siteDesc} />
        <meta property="og:url" content={pageConfig.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageConfig.siteTitle} />
        <meta property="og:description" content={pageConfig.siteDesc} />
        <meta property="og:image" content={pageConfig.siteImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageConfig.siteTitle} />
        <meta name="twitter:description" content={pageConfig.siteDesc} />
        <meta name="twitter:image" content={pageConfig.siteImg} />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <NextSeo nofollow={true} noindex={true} />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <MDXProvider components={mdxConfig}>
          <HeroBlock
          /* avatarImg={siteConfig.profileImg} */
          />
          <Block
            css={css`
              margin-top: 3.5em;
            `}
          >
            <AboutMeBlock />
          </Block>
          <Block>
            <OpenSourceBlock />
          </Block>
        </MDXProvider>
      </ThemeProvider>
    </div>
  );
};
